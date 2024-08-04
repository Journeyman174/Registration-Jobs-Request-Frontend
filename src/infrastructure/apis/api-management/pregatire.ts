import { useAppSelector } from "@application/store";
import {CnpStudiiApi,CnpStudiiDTOPagedResponse,CnpStudiiAddDTO} from "../client"
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
import { Mutation } from "@tanstack/react-query";

/**
 * Use constants to identify mutations and queries.
 */
const getCnpStudiiQueryKey = "getCnpStudiiQuery";
const getCnpStudiisQueryKey = "getCnpStudiisQuery";
const addCnpStudiiMutationKey = "addCnpStudiiMutation";
const deleteCnpStudiiMutationKey = "deleteCnpStudiiMutationKey";
/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the studii API.
 */
export const useCnpStudiiApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getCnpStudii = (id:string)=> new CnpStudiiApi(config).apiCnpStudiiGetByIdIdGet({id});
    const getCnpStudiis = (page:CnpStudiiDTOPagedResponse)=>new CnpStudiiApi(config).apiCnpStudiiGetFromUserIdGet(page);
    const addCnpStudii = (pregatire:CnpStudiiAddDTO)=>new CnpStudiiApi(config).apiCnpStudiiCreatePost({cnpStudiiAddDTO:pregatire});
    const deleteCnpStudii = (id: string) => new CnpStudiiApi(config).apiCnpStudiiCancelIdDelete({id});

    return {
        getCnpStudii: { // Return the query object.
            key: getCnpStudiiQueryKey, // Add the key to identify the query.
            query: getCnpStudii // Add the query callback.
        },
        getCnpStudiis: {
            key: getCnpStudiisQueryKey,
            query: getCnpStudiis
        },
        addCnpStudii:{
            key: addCnpStudiiMutationKey,
            mutation: addCnpStudii
        },
        deleteCnpStudii: {
            key: deleteCnpStudiiMutationKey,
            mutation: deleteCnpStudii
        }

     }
}