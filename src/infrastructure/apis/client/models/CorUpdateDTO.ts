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
 * @interface CorUpdateDTO
 */
export interface CorUpdateDTO {
    /**
     * 
     * @type {string}
     * @memberof CorUpdateDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CorUpdateDTO
     */
    codCor: string;
    /**
     * 
     * @type {string}
     * @memberof CorUpdateDTO
     */
    meserie: string;
}

/**
 * Check if a given object implements the CorUpdateDTO interface.
 */
export function instanceOfCorUpdateDTO(value: object): value is CorUpdateDTO {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('codCor' in value) || value['codCor'] === undefined) return false;
    if (!('meserie' in value) || value['meserie'] === undefined) return false;
    return true;
}

export function CorUpdateDTOFromJSON(json: any): CorUpdateDTO {
    return CorUpdateDTOFromJSONTyped(json, false);
}

export function CorUpdateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CorUpdateDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'codCor': json['codCor'],
        'meserie': json['meserie'],
    };
}

export function CorUpdateDTOToJSON(value?: CorUpdateDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'codCor': value['codCor'],
        'meserie': value['meserie'],
    };
}

