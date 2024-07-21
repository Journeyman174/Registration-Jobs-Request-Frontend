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
import type { CnpStudiiDTOPagedResponse } from './CnpStudiiDTOPagedResponse';
import {
    CnpStudiiDTOPagedResponseFromJSON,
    CnpStudiiDTOPagedResponseFromJSONTyped,
    CnpStudiiDTOPagedResponseToJSON,
} from './CnpStudiiDTOPagedResponse';
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';

/**
 * 
 * @export
 * @interface CnpStudiiDTOPagedResponseRequestResponse
 */
export interface CnpStudiiDTOPagedResponseRequestResponse {
    /**
     * 
     * @type {CnpStudiiDTOPagedResponse}
     * @memberof CnpStudiiDTOPagedResponseRequestResponse
     */
    response: CnpStudiiDTOPagedResponse;
    /**
     * 
     * @type {ErrorMessage}
     * @memberof CnpStudiiDTOPagedResponseRequestResponse
     */
    errorMessage: ErrorMessage;
}

/**
 * Check if a given object implements the CnpStudiiDTOPagedResponseRequestResponse interface.
 */
export function instanceOfCnpStudiiDTOPagedResponseRequestResponse(value: object): value is CnpStudiiDTOPagedResponseRequestResponse {
    if (!('response' in value) || value['response'] === undefined) return false;
    if (!('errorMessage' in value) || value['errorMessage'] === undefined) return false;
    return true;
}

export function CnpStudiiDTOPagedResponseRequestResponseFromJSON(json: any): CnpStudiiDTOPagedResponseRequestResponse {
    return CnpStudiiDTOPagedResponseRequestResponseFromJSONTyped(json, false);
}

export function CnpStudiiDTOPagedResponseRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CnpStudiiDTOPagedResponseRequestResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'response': CnpStudiiDTOPagedResponseFromJSON(json['response']),
        'errorMessage': ErrorMessageFromJSON(json['errorMessage']),
    };
}

export function CnpStudiiDTOPagedResponseRequestResponseToJSON(value?: CnpStudiiDTOPagedResponseRequestResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'response': CnpStudiiDTOPagedResponseToJSON(value['response']),
        'errorMessage': ErrorMessageToJSON(value['errorMessage']),
    };
}

