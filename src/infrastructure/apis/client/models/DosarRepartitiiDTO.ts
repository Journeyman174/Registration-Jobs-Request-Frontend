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
 * @interface DosarRepartitiiDTO
 */
export interface DosarRepartitiiDTO {
    /**
     * 
     * @type {string}
     * @memberof DosarRepartitiiDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DosarRepartitiiDTO
     */
    idDosar: string;
    /**
     * 
     * @type {string}
     * @memberof DosarRepartitiiDTO
     */
    idRepartitie: string;
}

/**
 * Check if a given object implements the DosarRepartitiiDTO interface.
 */
export function instanceOfDosarRepartitiiDTO(value: object): value is DosarRepartitiiDTO {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('idDosar' in value) || value['idDosar'] === undefined) return false;
    if (!('idRepartitie' in value) || value['idRepartitie'] === undefined) return false;
    return true;
}

export function DosarRepartitiiDTOFromJSON(json: any): DosarRepartitiiDTO {
    return DosarRepartitiiDTOFromJSONTyped(json, false);
}

export function DosarRepartitiiDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): DosarRepartitiiDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'idDosar': json['idDosar'],
        'idRepartitie': json['idRepartitie'],
    };
}

export function DosarRepartitiiDTOToJSON(value?: DosarRepartitiiDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'idDosar': value['idDosar'],
        'idRepartitie': value['idRepartitie'],
    };
}

