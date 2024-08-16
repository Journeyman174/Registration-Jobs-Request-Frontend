import { useAppSelector } from "@application/store";
import {FeedbackApi,FeedbackDTOPagedResponse,FeedbackDTO, ApiFeedbackGetFormsGetRequest} from "../client"
import { getAuthenticationConfiguration } from "@infrastructure/utils/userUtils";
import { Mutation } from "@tanstack/react-query";

/**
 * Use constants to identify mutations and queries.
 */

const getFeedbacksQueryKey = "getFeedbacksQuery";
const addFeedbackMutationKey = "addFeedbackMutation";


/**
 * Returns the an object with the callbacks that can be used for the React Query API, in this case to manage the user API.
 */
export const useFeedbackApi = () => {
    const { token } = useAppSelector(x => x.profileReducer); // You can use the data form the Redux storage. 
    const config = getAuthenticationConfiguration(token); // Use the token to configure the authentication header.


    const getFeedbacks = (page:ApiFeedbackGetFormsGetRequest)=>new FeedbackApi(config).apiFeedbackGetFormsGet(page);
    const addFeedback = (feedback:FeedbackDTO)=>new FeedbackApi(config).apiFeedbackCreatePost({feedbackDTO:feedback});

    return {

        getFeedbacks: {
            key: getFeedbacksQueryKey,
            query: getFeedbacks
        },
        addFeedback:{
            key: addFeedbackMutationKey,
            mutation: addFeedback
        },
     }
}