import { useAppSelector } from "@application/store";
import {StudiiApi,StudiiDTOPagedResponse,StudiiAddDTO} from "../client"
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
import { Mutation } from "@tanstack/react-query";

/**
 * Use constants to identify mutations and queries.
 */
const getStudiiQueryKey = "getStudiiQuery";
const getStudiisQueryKey = "getStudiisQuery";
const addStudiiMutationKey = "addStudiiMutation";
const deleteStudiiMutationKey = "deleteStudiiMutationKey";
/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the studii API.
 */
export const useStudiiApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getStudii = (id:string)=> new StudiiApi(config).apiStudiiGetByIdIdGet({id});
    const getStudiis = (page:StudiiDTOPagedResponse)=>new StudiiApi(config).apiStudiiGetPageGet(page);
    const addStudii = (studii:StudiiAddDTO)=>new StudiiApi(config).apiStudiiAddPost({studiiAddDTO:studii});
    const deleteStudii = (id: string) => new StudiiApi(config).apiStudiiDeleteIdDelete({id});

    return {
        getStudii: { // Return the query object.
            key: getStudiiQueryKey, // Add the key to identify the query.
            query: getStudii // Add the query callback.
        },
        getStudiis: {
            key: getStudiisQueryKey,
            query: getStudiis
        },
        addStudii:{
            key: addStudiiMutationKey,
            mutation: addStudii
        },
        deleteStudii: {
            key: deleteStudiiMutationKey,
            mutation: deleteStudii
        }

     }
}