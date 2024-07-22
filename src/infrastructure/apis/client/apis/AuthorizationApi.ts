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
  LoginDTO,
  LoginResponseDTORequestResponse,
} from '../models';
import {
    LoginDTOFromJSON,
    LoginDTOToJSON,
    LoginResponseDTORequestResponseFromJSON,
    LoginResponseDTORequestResponseToJSON,
} from '../models';

export interface ApiAuthorizationLoginPostRequest {
    loginDTO?: LoginDTO;
}



/**
 * 
 */
export class AuthorizationApi extends runtime.BaseAPI {

    /**
     */
    async apiAuthorizationLoginPostRaw(requestParameters: ApiAuthorizationLoginPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResponseDTORequestResponse>> {
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
            path: `/api/Authorization/Login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginDTOToJSON(requestParameters.loginDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResponseDTORequestResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiAuthorizationLoginPost(requestParameters: ApiAuthorizationLoginPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResponseDTORequestResponse> {
        const response = await this.apiAuthorizationLoginPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
