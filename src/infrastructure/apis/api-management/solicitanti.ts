import { useAppSelector } from "@application/store";
import { SolicitantiApi,SolicitantiDTOPagedResponse,SolicitantiAddDTO} from "../client"
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
import { Mutation } from "@tanstack/react-query";

/**
 * Use constants to identify mutations and queries.
 */
const getSolicitantiQueryKey = "getSolicitantiQuery";
const getSolicitantQueryKey = "getSolicitantQuery";
const addSolicitantMutationKey = "addSolicitantMutation";
const deleteSolicitantMutationKey = "deleteSolicitantMutationKey";
/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the user API.
 */
export const useSolicitantApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getSolicitant = (id:string)=> new SolicitantiApi(config).apiSolicitantiGetByIdIdGet({id});
    const getUserSolicitanti = (page:SolicitantiDTOPagedResponse)=>new SolicitantiApi(config).apiSolicitantiGetPageGet(page);
    const addSolicitant = (solicitant:SolicitantiAddDTO)=>new SolicitantiApi(config).apiSolicitantiAddPost({solicitantiAddDTO:solicitant});
    const deleteSolicitant = (id: string) => new SolicitantiApi(config).apiSolicitantiDeleteIdDelete({id});

    return {
        getSolicitant: { // Return the query object.
            key: getSolicitantQueryKey, // Add the key to identify the query.
            query: getSolicitant // Add the query callback.
        },
        getUserSolicitanti: {
            key: getSolicitantiQueryKey,
            query: getUserSolicitanti
        },
        addSolicitant:{
            key: addSolicitantMutationKey,
            mutation: addSolicitant
        },
        deleteSolicitant: {
            key: deleteSolicitantMutationKey,
            mutation: deleteSolicitant
        }
    }
}