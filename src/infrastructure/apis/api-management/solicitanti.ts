import { useAppSelector } from "@application/store";
import {SolicitantiApi,SolicitantiDTOPagedResponse,SolicitantiAddDTO, SolicitantiDTORequestResponse,ApiSolicitantiGetPageCorGetRequest,ApiSolicitantiGetPageStudiiGetRequest, CnpCalificariAddDTO, CorAddDTO, CorDTO, StudiiDTO} from "../client"
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";

import { Mutation } from "@tanstack/react-query";

/**
 * Use constants to identify mutations and queries.
 */
const getSolicitantQueryKey = "getSolicitantQuery";
const getSolicitantiQueryKey = "getSolicitantiQuery";
const addSolicitantMutationKey = "addSolicitantMutation";
const deleteSolicitantMutationKey = "deleteSolicitantMutationKey";
const getUserSolicitantQueryKey = "getUserSolicitantQuery";
const updateSolicitantiMutationKey = "updateSolicitantiMutation";
const getSolicitantibyIdQueryKey = "getSolicitantibyIdQuery";
const getMeseriiQuerryKey = "getMeseriiQuerry";
const getStudiiQuerryKey = "getStudiiQuerry";
const addCorTosolicitantMutationKey = "addCorTosolicitantMutation";
const removeCorFromsolicitantMutationKey = "removeCorFromsolicitantMutation";
const addStudiiTosolicitantMutationKey = "addStudiiTosolicitantMutation";
const removeStudiiFromsolicitantMutationKey = "removeStudiiFromsolicitantMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the user API.
 */
export const useSolicitantiApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getSolicitant = (id:string)=> new SolicitantiApi(config).apiSolicitantiGetByIdIdGet({id});
    const getUserSolicitant = (id:string)=>new SolicitantiApi(config).apiSolicitantiGetByUserIdIdGet({id});
    const getSolicitanti = (page:SolicitantiDTOPagedResponse)=>new SolicitantiApi(config).apiSolicitantiGetPageGet(page);
    const addSolicitant = (solicitant:SolicitantiAddDTO)=>new SolicitantiApi(config).apiSolicitantiAddPost({solicitantiAddDTO:solicitant});
    const deleteSolicitant = (id: string) => new SolicitantiApi(config).apiSolicitantiDeleteIdDelete({id});
    const getMeserii =  (page:ApiSolicitantiGetPageCorGetRequest)=>new SolicitantiApi(config).apiSolicitantiGetPageCorGet(page);
    const getStudii =  (page:ApiSolicitantiGetPageStudiiGetRequest)=>new SolicitantiApi(config).apiSolicitantiGetPageStudiiGet(page);
    const addCorTosolicitant = (Cor: CorDTO)=> new SolicitantiApi(config).apiSolicitantiAddCorToSolicitantPut({corDTO:Cor});
    const removeCorFromsolicitant = (Cor: CorDTO)=> new SolicitantiApi(config).apiSolicitantiRemoveCorFromSolicitantPut({corDTO:Cor});
    const addStudiiTosolicitant = (Studii: StudiiDTO)=> new SolicitantiApi(config).apiSolicitantiAddStudiiToSolicitantPut({studiiDTO:Studii});
    const removeStudiiFromsolicitant = (Studii: StudiiDTO)=> new SolicitantiApi(config).apiSolicitantiRemoveStudiiFromSolicitantPut({studiiDTO:Studii});
 

    return {
        getSolicitant: { // Return the query object.
            key: getSolicitantQueryKey, // Add the key to identify the query.
            query: getSolicitant // Add the query callback.
        },
        getUserSolicitant: {
            key: getUserSolicitantQueryKey,
            query: getUserSolicitant
        },

        getSolicitanti: {
            key: getSolicitantiQueryKey,
            query: getSolicitanti
        },
        addSolicitant:{
            key: addSolicitantMutationKey,
            mutation: addSolicitant
        },
         deleteSolicitant: {
            key: deleteSolicitantMutationKey,
            mutation: deleteSolicitant
        },
        getMeserii: { // Return the mutation object.
            key: getMeseriiQuerryKey, // Add the key to identify the mutation.
            query: getMeserii // Add the mutation callback.
        },
        getStudii: { // Return the mutation object.
            key: getStudiiQuerryKey, // Add the key to identify the mutation.
            query: getStudii // Add the mutation callback.
        },
        addCorTosolicitant:{
            key: addCorTosolicitantMutationKey,
            mutation: addCorTosolicitant
        },
        removeCorFromsolicitant:{
            key: removeCorFromsolicitantMutationKey,
            mutation: removeCorFromsolicitant
        },
        addStudiiTosolicitant:{
            key: addStudiiTosolicitantMutationKey,
            mutation: addStudiiTosolicitant
        },
        removeStudiiFromsolicitant:{
            key: removeStudiiFromsolicitantMutationKey,
            mutation: removeStudiiFromsolicitant
        }        
     }
}