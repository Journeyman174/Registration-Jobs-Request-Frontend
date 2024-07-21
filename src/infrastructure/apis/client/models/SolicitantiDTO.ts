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
 * @interface SolicitantiDTO
 */
export interface SolicitantiDTO {
    /**
     * 
     * @type {string}
     * @memberof SolicitantiDTO
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof SolicitantiDTO
     */
    dataInregistare: Date;
    /**
     * 
     * @type {string}
     * @memberof SolicitantiDTO
     */
    cnpSolicitant: string;
    /**
     * 
     * @type {string}
     * @memberof SolicitantiDTO
     */
    nume: string;
    /**
     * 
     * @type {string}
     * @memberof SolicitantiDTO
     */
    prenume: string;
    /**
     * 
     * @type {string}
     * @memberof SolicitantiDTO
     */
    adresa?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SolicitantiDTO
     */
    userId: string;
}

/**
 * Check if a given object implements the SolicitantiDTO interface.
 */
export function instanceOfSolicitantiDTO(value: object): value is SolicitantiDTO {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('dataInregistare' in value) || value['dataInregistare'] === undefined) return false;
    if (!('cnpSolicitant' in value) || value['cnpSolicitant'] === undefined) return false;
    if (!('nume' in value) || value['nume'] === undefined) return false;
    if (!('prenume' in value) || value['prenume'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    return true;
}

export function SolicitantiDTOFromJSON(json: any): SolicitantiDTO {
    return SolicitantiDTOFromJSONTyped(json, false);
}

export function SolicitantiDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolicitantiDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'dataInregistare': (new Date(json['dataInregistare'])),
        'cnpSolicitant': json['cnpSolicitant'],
        'nume': json['nume'],
        'prenume': json['prenume'],
        'adresa': json['adresa'] == null ? undefined : json['adresa'],
        'userId': json['userId'],
    };
}

export function SolicitantiDTOToJSON(value?: SolicitantiDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'dataInregistare': ((value['dataInregistare']).toISOString()),
        'cnpSolicitant': value['cnpSolicitant'],
        'nume': value['nume'],
        'prenume': value['prenume'],
        'adresa': value['adresa'],
        'userId': value['userId'],
    };
}

