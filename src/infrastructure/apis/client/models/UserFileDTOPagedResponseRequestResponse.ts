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

import { exists, mapValues } from '../runtime';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';
import type { UserFileDTOPagedResponse } from './UserFileDTOPagedResponse';
import {
    UserFileDTOPagedResponseFromJSON,
    UserFileDTOPagedResponseFromJSONTyped,
    UserFileDTOPagedResponseToJSON,
} from './UserFileDTOPagedResponse';

/**
 * 
 * @export
 * @interface UserFileDTOPagedResponseRequestResponse
 */
export interface UserFileDTOPagedResponseRequestResponse {
    /**
     * 
     * @type {UserFileDTOPagedResponse}
     * @memberof UserFileDTOPagedResponseRequestResponse
     */
    response: UserFileDTOPagedResponse;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof UserFileDTOPagedResponseRequestResponse
     */
    errorMessage: ErrorMessage;
}

/**
 * Check if a given object implements the UserFileDTOPagedResponseRequestResponse interface.
 */
export function instanceOfUserFileDTOPagedResponseRequestResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "response" in value;
    isInstance = isInstance && "errorMessage" in value;

    return isInstance;
}

export function UserFileDTOPagedResponseRequestResponseFromJSON(json: any): UserFileDTOPagedResponseRequestResponse {
    return UserFileDTOPagedResponseRequestResponseFromJSONTyped(json, false);
}

export function UserFileDTOPagedResponseRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserFileDTOPagedResponseRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': UserFileDTOPagedResponseFromJSON(json['response']),
        'errorMessage': ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function UserFileDTOPagedResponseRequestResponseToJSON(value?: UserFileDTOPagedResponseRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': UserFileDTOPagedResponseToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

