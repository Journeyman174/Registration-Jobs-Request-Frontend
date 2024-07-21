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

import { mapValues } from '../runtime';
import type { RepartitiiDTO } from './RepartitiiDTO';
import {
    RepartitiiDTOFromJSON,
    RepartitiiDTOFromJSONTyped,
    RepartitiiDTOToJSON,
} from './RepartitiiDTO';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

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
export function instanceOfRepartitiiDTORequestResponse(value: object): value is RepartitiiDTORequestResponse {
    if (!('response' in value) || value['response'] === undefined) return false;
    if (!('errorMessage' in value) || value['errorMessage'] === undefined) return false;
    return true;
}

export function RepartitiiDTORequestResponseFromJSON(json: any): RepartitiiDTORequestResponse {
    return RepartitiiDTORequestResponseFromJSONTyped(json, false);
}

export function RepartitiiDTORequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepartitiiDTORequestResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': RepartitiiDTOFromJSON(json['response']),
        'errorMessage': ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function RepartitiiDTORequestResponseToJSON(value?: RepartitiiDTORequestResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'response': RepartitiiDTOToJSON(value['response']),
        'errorMessage': ErrorMessageToJSON(value['errorMessage']),
    };
}

