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
import type { RepartitiiDTO } from './RepartitiiDTO';
import {
    RepartitiiDTOFromJSON,
    RepartitiiDTOFromJSONTyped,
    RepartitiiDTOToJSON,
} from './RepartitiiDTO';

/**
 * 
 * @export
 * @interface RepartitiiDTORequestResponse
 */
export interface RepartitiiDTORequestResponse {
    /**
     * 
     * @type {RepartitiiDTO}
     * @memberof RepartitiiDTORequestResponse
     */
    response: RepartitiiDTO;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof RepartitiiDTORequestResponse
     */
    errorMessage: ErrorMessage;
}

/**
 * Check if a given object implements the RepartitiiDTORequestResponse interface.
 */
export function instanceOfRepartitiiDTORequestResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "response" in value;
    isInstance = isInstance && "errorMessage" in value;

    return isInstance;
}

export function RepartitiiDTORequestResponseFromJSON(json: any): RepartitiiDTORequestResponse {
    return RepartitiiDTORequestResponseFromJSONTyped(json, false);
}

export function RepartitiiDTORequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepartitiiDTORequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': RepartitiiDTOFromJSON(json['response']),
        'errorMessage': ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function RepartitiiDTORequestResponseToJSON(value?: RepartitiiDTORequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': RepartitiiDTOToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

