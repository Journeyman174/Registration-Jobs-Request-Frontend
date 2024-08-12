import { useAppSelector } from "@application/store";
import {CorApi,CorDTOPagedResponse,CorAddDTO, CorUpdateDTO, ApiCorGetPageGetRequest} from "../client"
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
import { Mutation } from "@tanstack/react-query";

/**
 * Use constants to identify mutations and queries.
 */
const getCorQueryKey = "getCorQuery";
const getCorsQueryKey = "getCorsQuery";
const addCorMutationKey = "addCorMutation";
const deleteCorMutationKey = "deleteCorMutationKey";
const updateCorMutationKey = "updateCorMutation";

/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the user API.
 */
export const useCorApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getCor = (id:string)=> new CorApi(config).apiCorGetByIdIdGet({id});
    const getCors = (page:ApiCorGetPageGetRequest)=>new CorApi(config).apiCorGetPageGet(page);
    const addCor = (cor:CorAddDTO)=>new CorApi(config).apiCorAddPost({corAddDTO:cor});
    const deleteCor = (id: string) => new CorApi(config).apiCorDeleteIdDelete({id});
    const updateCor =   (cor: CorUpdateDTO) => new CorApi(config).apiCorUpdatePut({corUpdateDTO: cor});
    return {
        getCor: { // Return the query object.
            key: getCorQueryKey, // Add the key to identify the query.
            query: getCor // Add the query callback.
        },
        getCors: {
            key: getCorsQueryKey,
            query: getCors
        },
        addCor:{
            key: addCorMutationKey,
            mutation: addCor
        },
        deleteCor: {
            key: deleteCorMutationKey,
            mutation: deleteCor
        },
        updateCor: {
            key: updateCorMutationKey,
            mutation: updateCor
        },

     }
}