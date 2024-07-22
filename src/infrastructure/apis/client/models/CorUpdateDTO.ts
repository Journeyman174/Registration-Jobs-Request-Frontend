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
export function instanceOfCorUpdateDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "codCor" in value;
    isInstance = isInstance && "meserie" in value;

    return isInstance;
}

export function CorUpdateDTOFromJSON(json: any): CorUpdateDTO {
    return CorUpdateDTOFromJSONTyped(json, false);
}

export function CorUpdateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CorUpdateDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'codCor': json['codCor'],
        'meserie': json['meserie'],
    };
}

export function CorUpdateDTOToJSON(value?: CorUpdateDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'codCor': value.codCor,
        'meserie': value.meserie,
    };
}

