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
import type { OlmDTO } from './OlmDTO';
import {
    OlmDTOFromJSON,
    OlmDTOFromJSONTyped,
    OlmDTOToJSON,
} from './OlmDTO';

/**
 * 
 * @export
 * @interface OlmDTORequestResponse
 */
export interface OlmDTORequestResponse {
    /**
     * 
     * @type {OlmDTO}
     * @memberof OlmDTORequestResponse
     */
    response: OlmDTO;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof OlmDTORequestResponse
     */
    errorMessage: ErrorMessage;
}

/**
 * Check if a given object implements the OlmDTORequestResponse interface.
 */
export function instanceOfOlmDTORequestResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "response" in value;
    isInstance = isInstance && "errorMessage" in value;

    return isInstance;
}

export function OlmDTORequestResponseFromJSON(json: any): OlmDTORequestResponse {
    return OlmDTORequestResponseFromJSONTyped(json, false);
}

export function OlmDTORequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OlmDTORequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': OlmDTOFromJSON(json['response']),
        'errorMessage': ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function OlmDTORequestResponseToJSON(value?: OlmDTORequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': OlmDTOToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

