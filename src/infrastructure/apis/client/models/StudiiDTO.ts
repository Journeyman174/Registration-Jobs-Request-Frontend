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
/**
 * 
 * @export
 * @interface StudiiDTO
 */
export interface StudiiDTO {
    /**
     * 
     * @type {string}
     * @memberof StudiiDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StudiiDTO
     */
    denStudii: string;
}

/**
 * Check if a given object implements the StudiiDTO interface.
 */
export function instanceOfStudiiDTO(value: object): value is StudiiDTO {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('denStudii' in value) || value['denStudii'] === undefined) return false;
    return true;
}

export function StudiiDTOFromJSON(json: any): StudiiDTO {
    return StudiiDTOFromJSONTyped(json, false);
}

export function StudiiDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudiiDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'denStudii': json['denStudii'],
    };
}

export function StudiiDTOToJSON(value?: StudiiDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'denStudii': value['denStudii'],
    };
}

