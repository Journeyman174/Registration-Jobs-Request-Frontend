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
  DosarAddDTO,
  DosarDTOPagedResponseRequestResponse,
  DosarDTORequestResponse,
  DosarUpdateDTO,
  RequestResponse,
} from '../models';
import {
    DosarAddDTOFromJSON,
    DosarAddDTOToJSON,
    DosarDTOPagedResponseRequestResponseFromJSON,
    DosarDTOPagedResponseRequestResponseToJSON,
    DosarDTORequestResponseFromJSON,
    DosarDTORequestResponseToJSON,
    DosarUpdateDTOFromJSON,
    DosarUpdateDTOToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
} from '../models';

export interface ApiDosarAddPostRequest {
    dosarAddDTO?: DosarAddDTO;
}

export interface ApiDosarDeleteIdDeleteRequest {
    id: string;
}

export interface ApiDosarGetByIdIdGetRequest {
    id: string;
}

export interface ApiDosarGetFromUserIdGetRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

export interface ApiDosarUpdatePutRequest {
    dosarUpdateDTO?: DosarUpdateDTO;
}

/**
 * 
 */
export class DosarApi extends runtime.BaseAPI {

    /**
     */
    async apiDosarAddPostRaw(requestParameters: ApiDosarAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Dosar/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DosarAddDTOToJSON(requestParameters.dosarAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiDosarAddPost(requestParameters: ApiDosarAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiDosarAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDosarDeleteIdDeleteRaw(requestParameters: ApiDosarDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiDosarDeleteIdDelete.');
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
            path: `/api/Dosar/Delete/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiDosarDeleteIdDelete(requestParameters: ApiDosarDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiDosarDeleteIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDosarGetByIdIdGetRaw(requestParameters: ApiDosarGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DosarDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiDosarGetByIdIdGet.');
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
            path: `/api/Dosar/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DosarDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiDosarGetByIdIdGet(requestParameters: ApiDosarGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DosarDTORequestResponse> {
        const response = await this.apiDosarGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDosarGetFromUserIdGetRaw(requestParameters: ApiDosarGetFromUserIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DosarDTOPagedResponseRequestResponse>> {
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
            path: `/api/Dosar/GetFromUserId`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DosarDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiDosarGetFromUserIdGet(requestParameters: ApiDosarGetFromUserIdGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DosarDTOPagedResponseRequestResponse> {
        const response = await this.apiDosarGetFromUserIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDosarUpdatePutRaw(requestParameters: ApiDosarUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Dosar/Update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DosarUpdateDTOToJSON(requestParameters.dosarUpdateDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiDosarUpdatePut(requestParameters: ApiDosarUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiDosarUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
