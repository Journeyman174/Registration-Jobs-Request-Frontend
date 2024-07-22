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
  RequestResponse,
  UserAddDTO,
  UserDTOPagedResponseRequestResponse,
  UserDTORequestResponse,
  UserUpdateDTO,
} from '../models';
import {
    RequestResponseFromJSON,
    RequestResponseToJSON,
    UserAddDTOFromJSON,
    UserAddDTOToJSON,
    UserDTOPagedResponseRequestResponseFromJSON,
    UserDTOPagedResponseRequestResponseToJSON,
    UserDTORequestResponseFromJSON,
    UserDTORequestResponseToJSON,
    UserUpdateDTOFromJSON,
    UserUpdateDTOToJSON,
} from '../models';

export interface ApiUserAddPostRequest {
    userAddDTO?: UserAddDTO;
}

export interface ApiUserDeleteIdDeleteRequest {
    id: string;
}

export interface ApiUserGetByIdIdGetRequest {
    id: string;
}

export interface ApiUserGetPageGetRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

export interface ApiUserUpdatePutRequest {
    userUpdateDTO?: UserUpdateDTO;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     */
    async apiUserAddPostRaw(requestParameters: ApiUserAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/User/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserAddDTOToJSON(requestParameters.userAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserAddPost(requestParameters: ApiUserAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiUserAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserDeleteIdDeleteRaw(requestParameters: ApiUserDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiUserDeleteIdDelete.');
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
            path: `/api/User/Delete/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserDeleteIdDelete(requestParameters: ApiUserDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiUserDeleteIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserGetByIdIdGetRaw(requestParameters: ApiUserGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiUserGetByIdIdGet.');
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
            path: `/api/User/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserGetByIdIdGet(requestParameters: ApiUserGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTORequestResponse> {
        const response = await this.apiUserGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserGetPageGetRaw(requestParameters: ApiUserGetPageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDTOPagedResponseRequestResponse>> {
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
            path: `/api/User/GetPage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserGetPageGet(requestParameters: ApiUserGetPageGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDTOPagedResponseRequestResponse> {
        const response = await this.apiUserGetPageGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserUpdatePutRaw(requestParameters: ApiUserUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/User/Update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserUpdateDTOToJSON(requestParameters.userUpdateDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserUpdatePut(requestParameters: ApiUserUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiUserUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
