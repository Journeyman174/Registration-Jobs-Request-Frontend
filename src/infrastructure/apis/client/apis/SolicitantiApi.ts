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
  CorDTO,
  CorDTOPagedResponseRequestResponse,
  RequestResponse,
  SolicitantiAddDTO,
  SolicitantiDTOPagedResponseRequestResponse,
  SolicitantiDTORequestResponse,
  SolicitantiUpdateDTO,
  StudiiDTO,
  StudiiDTOPagedResponseRequestResponse,
} from '../models';
import {
    CorDTOFromJSON,
    CorDTOToJSON,
    CorDTOPagedResponseRequestResponseFromJSON,
    CorDTOPagedResponseRequestResponseToJSON,
    RequestResponseFromJSON,
    RequestResponseToJSON,
    SolicitantiAddDTOFromJSON,
    SolicitantiAddDTOToJSON,
    SolicitantiDTOPagedResponseRequestResponseFromJSON,
    SolicitantiDTOPagedResponseRequestResponseToJSON,
    SolicitantiDTORequestResponseFromJSON,
    SolicitantiDTORequestResponseToJSON,
    SolicitantiUpdateDTOFromJSON,
    SolicitantiUpdateDTOToJSON,
    StudiiDTOFromJSON,
    StudiiDTOToJSON,
    StudiiDTOPagedResponseRequestResponseFromJSON,
    StudiiDTOPagedResponseRequestResponseToJSON,
} from '../models';

export interface ApiSolicitantiAddCorToSolicitantPutRequest {
    corDTO?: CorDTO;
}

export interface ApiSolicitantiAddPostRequest {
    solicitantiAddDTO?: SolicitantiAddDTO;
}

export interface ApiSolicitantiAddStudiiToSolicitantPutRequest {
    studiiDTO?: StudiiDTO;
}

export interface ApiSolicitantiDeleteIdDeleteRequest {
    id: string;
}

export interface ApiSolicitantiGetByIdIdGetRequest {
    id: string;
}

export interface ApiSolicitantiGetByUserIdIdGetRequest {
    id: string;
}

export interface ApiSolicitantiGetPageCorGetRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

export interface ApiSolicitantiGetPageGetRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

export interface ApiSolicitantiGetPageStudiiGetRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

export interface ApiSolicitantiRemoveCorFromSolicitantPutRequest {
    corDTO?: CorDTO;
}

export interface ApiSolicitantiRemoveStudiiFromSolicitantPutRequest {
    studiiDTO?: StudiiDTO;
}

export interface ApiSolicitantiUpdatePutRequest {
    solicitantiUpdateDTO?: SolicitantiUpdateDTO;
}

/**
 * 
 */
export class SolicitantiApi extends runtime.BaseAPI {

    /**
     */
    async apiSolicitantiAddCorToSolicitantPutRaw(requestParameters: ApiSolicitantiAddCorToSolicitantPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Solicitanti/AddCorToSolicitant`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CorDTOToJSON(requestParameters.corDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiAddCorToSolicitantPut(requestParameters: ApiSolicitantiAddCorToSolicitantPutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiSolicitantiAddCorToSolicitantPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiAddPostRaw(requestParameters: ApiSolicitantiAddPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Solicitanti/Add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SolicitantiAddDTOToJSON(requestParameters.solicitantiAddDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiAddPost(requestParameters: ApiSolicitantiAddPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiSolicitantiAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiAddStudiiToSolicitantPutRaw(requestParameters: ApiSolicitantiAddStudiiToSolicitantPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Solicitanti/AddStudiiToSolicitant`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StudiiDTOToJSON(requestParameters.studiiDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiAddStudiiToSolicitantPut(requestParameters: ApiSolicitantiAddStudiiToSolicitantPutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiSolicitantiAddStudiiToSolicitantPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiDeleteIdDeleteRaw(requestParameters: ApiSolicitantiDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiSolicitantiDeleteIdDelete.');
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
            path: `/api/Solicitanti/Delete/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiDeleteIdDelete(requestParameters: ApiSolicitantiDeleteIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiSolicitantiDeleteIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiGetByIdIdGetRaw(requestParameters: ApiSolicitantiGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolicitantiDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiSolicitantiGetByIdIdGet.');
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
            path: `/api/Solicitanti/GetById/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolicitantiDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiGetByIdIdGet(requestParameters: ApiSolicitantiGetByIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolicitantiDTORequestResponse> {
        const response = await this.apiSolicitantiGetByIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiGetByUserIdIdGetRaw(requestParameters: ApiSolicitantiGetByUserIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolicitantiDTORequestResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiSolicitantiGetByUserIdIdGet.');
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
            path: `/api/Solicitanti/GetByUserId/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolicitantiDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiGetByUserIdIdGet(requestParameters: ApiSolicitantiGetByUserIdIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolicitantiDTORequestResponse> {
        const response = await this.apiSolicitantiGetByUserIdIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiGetPageCorGetRaw(requestParameters: ApiSolicitantiGetPageCorGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CorDTOPagedResponseRequestResponse>> {
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
            path: `/api/Solicitanti/GetPageCor`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CorDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiGetPageCorGet(requestParameters: ApiSolicitantiGetPageCorGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CorDTOPagedResponseRequestResponse> {
        const response = await this.apiSolicitantiGetPageCorGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiGetPageGetRaw(requestParameters: ApiSolicitantiGetPageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SolicitantiDTOPagedResponseRequestResponse>> {
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
            path: `/api/Solicitanti/GetPage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SolicitantiDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiGetPageGet(requestParameters: ApiSolicitantiGetPageGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SolicitantiDTOPagedResponseRequestResponse> {
        const response = await this.apiSolicitantiGetPageGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiGetPageStudiiGetRaw(requestParameters: ApiSolicitantiGetPageStudiiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StudiiDTOPagedResponseRequestResponse>> {
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
            path: `/api/Solicitanti/GetPageStudii`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudiiDTOPagedResponseRequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiGetPageStudiiGet(requestParameters: ApiSolicitantiGetPageStudiiGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StudiiDTOPagedResponseRequestResponse> {
        const response = await this.apiSolicitantiGetPageStudiiGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiRemoveCorFromSolicitantPutRaw(requestParameters: ApiSolicitantiRemoveCorFromSolicitantPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Solicitanti/RemoveCorFromSolicitant`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CorDTOToJSON(requestParameters.corDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiRemoveCorFromSolicitantPut(requestParameters: ApiSolicitantiRemoveCorFromSolicitantPutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiSolicitantiRemoveCorFromSolicitantPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiRemoveStudiiFromSolicitantPutRaw(requestParameters: ApiSolicitantiRemoveStudiiFromSolicitantPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Solicitanti/RemoveStudiiFromSolicitant`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StudiiDTOToJSON(requestParameters.studiiDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiRemoveStudiiFromSolicitantPut(requestParameters: ApiSolicitantiRemoveStudiiFromSolicitantPutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiSolicitantiRemoveStudiiFromSolicitantPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiSolicitantiUpdatePutRaw(requestParameters: ApiSolicitantiUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestResponse>> {
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
            path: `/api/Solicitanti/Update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SolicitantiUpdateDTOToJSON(requestParameters.solicitantiUpdateDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiSolicitantiUpdatePut(requestParameters: ApiSolicitantiUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestResponse> {
        const response = await this.apiSolicitantiUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
