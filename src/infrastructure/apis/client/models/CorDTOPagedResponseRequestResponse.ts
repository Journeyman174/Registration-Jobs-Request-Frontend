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
import type { CorDTOPagedResponse } from './CorDTOPagedResponse';
import {
    CorDTOPagedResponseFromJSON,
    CorDTOPagedResponseFromJSONTyped,
    CorDTOPagedResponseToJSON,
} from './CorDTOPagedResponse';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface CorDTOPagedResponseRequestResponse
 */
export interface CorDTOPagedResponseRequestResponse {
    /**
     * 
     * @type {CorDTOPagedResponse}
     * @memberof CorDTOPagedResponseRequestResponse
     */
    response: CorDTOPagedResponse;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof CorDTOPagedResponseRequestResponse
     */
    errorMessage: ErrorMessage;
}

/**
 * Check if a given object implements the CorDTOPagedResponseRequestResponse interface.
 */
export function instanceOfCorDTOPagedResponseRequestResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "response" in value;
    isInstance = isInstance && "errorMessage" in value;

    return isInstance;
}

export function CorDTOPagedResponseRequestResponseFromJSON(json: any): CorDTOPagedResponseRequestResponse {
    return CorDTOPagedResponseRequestResponseFromJSONTyped(json, false);
}

export function CorDTOPagedResponseRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CorDTOPagedResponseRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'response': CorDTOPagedResponseFromJSON(json['response']),
        'errorMessage': ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function CorDTOPagedResponseRequestResponseToJSON(value?: CorDTOPagedResponseRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'response': CorDTOPagedResponseToJSON(value.response),
        'errorMessage': ErrorMessageToJSON(value.errorMessage),
    };
}

