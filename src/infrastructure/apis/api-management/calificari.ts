import { useAppSelector } from "@application/store";
import {SolicitantiApi,CnpCalificariApi,CnpCalificariDTOPagedResponse,CnpCalificariAddDTO, CorDTO, CorDTOPagedResponseRequestResponse, CorDTOPagedResponse} from "../client"
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
import { Mutation } from "@tanstack/react-query";
import { Pages } from "@mui/icons-material";

/**
 * Use constants to identify mutations and queries.
 */
const getCnpCalificariQueryKey = "getCnpCalificariQuery";
const getCalificariQueryKey = "getCalificariQuery";
const getCnpCalificarisQueryKey = "getCnpCalificarisQuery";
const addCnpCalificariMutationKey = "addCnpCalificariMutation";
const deleteCnpCalificariMutationKey = "deleteCnpCalificariMutationKey";
/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the user API.
 */
export const useCnpCalificariApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.

    const getCnpCalificari = (id:string)=> new CnpCalificariApi(config).apiCnpCalificariGetByIdIdGet({id});
    const getCnpCalificaris = (page:CnpCalificariDTOPagedResponse)=>new CnpCalificariApi(config).apiCnpCalificariGetFromUserIdGet(page);
    const addCnpCalificari = (calificari:CnpCalificariAddDTO)=>new CnpCalificariApi(config).apiCnpCalificariCreatePost({cnpCalificariAddDTO:calificari});
    const deleteCnpCalificari = (id: string) => new CnpCalificariApi(config).apiCnpCalificariCancelIdDelete({id});
    const getCalificari = (page:CorDTOPagedResponse) => new SolicitantiApi(config).apiSolicitantiGetPageCorGet(page);

    return {
        getCalificari: {
            key: getCalificariQueryKey,
            query: getCalificari
        },
        getCnpCalificari: { // Return the query object.
            key: getCnpCalificariQueryKey, // Add the key to identify the query.
            query: getCnpCalificari // Add the query callback.
        },
        getCnpCalificaris: {
            key: getCnpCalificarisQueryKey,
            query: getCnpCalificaris
        },
        addCnpCalificari:{
            key: addCnpCalificariMutationKey,
            mutation: addCnpCalificari
        },
        deleteCnpCalificari: {
            key: deleteCnpCalificariMutationKey,
            mutation: deleteCnpCalificari
        }

     }
}