/* tslint:disable */
/* eslint-disable */
/**
 * MobyLab Web App
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  FeedbackDTO,
  FeedbackDTOPagedResponseRequestResponse,
  RequestResponse,
} from '../models';
import {
    FeedbackDTOFromJSON,
    FeedbackDTOToJSON,
    FeedbackDTOPagedResponseRequestResponseFromJSON,
    FeedbackDTOPagedResponseRequestResponseToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
} from '../models';

export interface ApiFeedbackCreatePostRequest {
    feedbackDTO?: FeedbackDTO;
}

export interface ApiFeedbackGetFormsGetRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

/**
 * 
 */
export class FeedbackApi extends runtime.BaseAPI {

    /**
     */
    async apiFeedbackCreatePostRaw(requestParameters: ApiFeedbackCreatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Feedback/Create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FeedbackDTOToJSON(requestParameters.feedbackDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiFeedbackCreatePost(requestParameters: ApiFeedbackCreatePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiFeedbackCreatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiFeedbackGetFormsGetRaw(requestParameters: ApiFeedbackGetFormsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeedbackDTOPagedResponseRequestResponse>> {
        const queryParameters: any = {};

        if (requestParameters.search !== undefined) {
            queryParameters['Search'] = requestParameters.search;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['Page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Feedback/GetForms`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeedbackDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiFeedbackGetFormsGet(requestParameters: ApiFeedbackGetFormsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeedbackDTOPagedResponseRequestResponse> {
        const response = await this.apiFeedbackGetFormsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
