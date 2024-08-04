import { useTableController } from "../Table.controller";
import { useSolicitantiApi ,useCorApi, useStudiiApi, useUserApi,useCnpCalificariApi} from "@infrastructure/apis/api-management";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { usePaginationController } from "../Pagination.controller";
import { useAppSelector } from "@application/store";
import { CorDTO } from "@infrastructure/apis/client";

/**
 * This is controller hook manages the table state including the pagination and data retrieval from the backend.
 */
export const useSolicitantiTableController = () => {

    const { userId: ownUserId } = useAppSelector(x => x.profileReducer);    

    const { getSolicitanti: { key: queryKey,  query:querySol}, deleteSolicitant: { key: deleteProdKey, mutation: deleteSolicitanti },
    getUserSolicitant:{key: getUserSolicitantQuery,query:getUserSolicitant},
    getMeserii:{key:getMeseriiQuerryKey,query:getMeserii}, addCorTosolicitant:{key: addCorTosolicitantMutationKey,mutation:  addCorTosolicitant },removeCorFromsolicitant:{key:removeCorFromsolicitantMutationKey,mutation:removeCorFromsolicitant} ,
    getStudii:{key:getStudiiQuerryKey,query:getStudii},addStudiiTosolicitant:{key: addStudiiTosolicitantMutationKey,mutation:  addStudiiTosolicitant }, removeStudiiFromsolicitant:{key:removeStudiiFromsolicitantMutationKey,mutation:removeStudiiFromsolicitant}
} = useSolicitantiApi(); // Use the API hook.
    const queryClient = useQueryClient(); // Get the query client.
    const { page, pageSize, setPagination } = usePaginationController(); // Get the pagination state.
    
    const { data} = useQuery({
        queryKey: [queryKey, page, pageSize],
        queryFn: () => querySol({
            page, pageSize,
            totalCount: 0,
            data: []
        })
    }); // Retrieve the table page from the backend via the query hook.

    
    const tryReload = useCallback(
        () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
        [queryClient, queryKey]); // Create a callback to try reloading the data for the table via query invalidation.

    const { mutateAsync: addCormutation } = useMutation({
            mutationKey: [addCorTosolicitantMutationKey],
            mutationFn: addCorTosolicitant
    });

    const { mutateAsync: removeCormutation } = useMutation({
        mutationKey: [removeCorFromsolicitantMutationKey],
        mutationFn: removeCorFromsolicitant
    });
    const { mutateAsync: addStudiimutation } = useMutation({
        mutationKey: [addStudiiTosolicitantMutationKey],
        mutationFn: addStudiiTosolicitant
});

const { mutateAsync: removeStudiimutation } = useMutation({
    mutationKey: [removeStudiiFromsolicitantMutationKey],
    mutationFn: removeStudiiFromsolicitant
});
        


    const { getCors: { key: queryKey2, query:queryCors }} = useCorApi(); 
    const { getStudiis: { key: queryKey3, query:queryStudiis }} = useStudiiApi(); 

    const addMesTosolicitant = useCallback(
        (cor: CorDTO) => addCormutation(cor).then(() => queryClient.invalidateQueries({ queryKey: [queryKey] })
        .then(() => queryClient.invalidateQueries({ queryKey: [queryKey2] }))
        .then(() => queryClient.invalidateQueries({ queryKey: [getMeseriiQuerryKey] }))),
        [queryClient, addCormutation, queryKey,queryKey2]); 

    const RemoveMesFromSolicitant = useCallback(
        (cor: CorDTO) => removeCormutation(cor).then(() => queryClient.invalidateQueries({ queryKey: [queryKey] })
        .then(() => queryClient.invalidateQueries({ queryKey: [queryKey3] }))
        .then(() => queryClient.invalidateQueries({ queryKey: [getStudiiQuerryKey] }))),
        [queryClient, removeCormutation, queryKey,queryKey3]); 


    const { data:CorData, isError, isLoading } = useQuery({
            queryKey: [getMeseriiQuerryKey, page, pageSize],
            queryFn: () => getMeserii({ page, pageSize })
        });

        const { data:StudiiData } = useQuery({
            queryKey: [getStudiiQuerryKey, page, pageSize],
            queryFn: () => getStudii({ page, pageSize })
        });



    const tableController = useTableController(setPagination,data?.response?.pageSize); // Adapt the pagination for the table.

    const { getUsers: { key: queryKey4, query:GetUsers }} = useUserApi(); 
    const { data:Userdata} = useQuery({
        queryKey: [queryKey3, page, pageSize],
        queryFn: () => GetUsers({ page, pageSize })
    }); // Retrieve the table page from the backend via the query hook.


    return { // Return the controller state and actions.
        ...tableController,
        tryReload,
        pagedData: data?.response,
        isError,
        isLoading,
        getMeserii,
        getStudii,
        removeCorFromsolicitant,
        removeStudiiFromsolicitant,
        deleteSolicitanti,
        CorData:CorData?.response,
        StudiiData:StudiiData?.response,
    };
    }