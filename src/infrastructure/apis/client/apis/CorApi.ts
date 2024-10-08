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
  CorAddDTO,
  CorDTOPagedResponseRequestResponse,
  CorDTORequestResponse,
  CorUpdateDTO,
  RequestResponse,
} from '../models';
import {
    CorAddDTOFromJSON,
    CorAddDTOToJSON,
    CorDTOPagedResponseRequestResponseFromJSON,
    CorDTOPagedResponseRequestResponseToJSON,
    CorDTORequestResponseFromJSON,
    CorDTORequestResponseToJSON,
    CorUpdateDTOFromJSON,
    CorUpdateDTOToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
} from '../models';

export interface ApiCorAddPostRequest {
    corAddDTO?: CorAddDTO;
}

export interface ApiCorDeleteIdDeleteRequest {
    id: string;
}

export interface ApiCorGetByIdIdGetRequest {
    id: string;
}

export interface ApiCorGetPageGetRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

export interface ApiCorUpdatePutRequest {
    corUpdateDTO?: CorUpdateDTO;
}

/**
 * 
 */
export class CorApi extends runtime.BaseAPI {

    /**
     */
    async apiCorAddPostRaw(requestParameters: ApiCorAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Cor/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CorAddDTOToJSON(requestParameters.corAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCorAddPost(requestParameters: ApiCorAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiCorAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCorDeleteIdDeleteRaw(requestParameters: ApiCorDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCorDeleteIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Cor/Delete/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCorDeleteIdDelete(requestParameters: ApiCorDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiCorDeleteIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCorGetByIdIdGetRaw(requestParameters: ApiCorGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CorDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCorGetByIdIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/Cor/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CorDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCorGetByIdIdGet(requestParameters: ApiCorGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CorDTORequestResponse> {
        const response = await this.apiCorGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCorGetPageGetRaw(requestParameters: ApiCorGetPageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CorDTOPagedResponseRequestResponse>> {
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
            path: `/api/Cor/GetPage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CorDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCorGetPageGet(requestParameters: ApiCorGetPageGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CorDTOPagedResponseRequestResponse> {
        const response = await this.apiCorGetPageGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiCorUpdatePutRaw(requestParameters: ApiCorUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Cor/Update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CorUpdateDTOToJSON(requestParameters.corUpdateDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiCorUpdatePut(requestParameters: ApiCorUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiCorUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
