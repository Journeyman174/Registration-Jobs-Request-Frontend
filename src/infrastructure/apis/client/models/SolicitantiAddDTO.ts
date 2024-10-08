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
 * @interface SolicitantiAddDTO
 */
export interface SolicitantiAddDTO {
    /**
     * 
     * @type {Date}
     * @memberof SolicitantiAddDTO
     */
    dataInregistare: Date;
    /**
     * 
     * @type {string}
     * @memberof SolicitantiAddDTO
     */
    cnpSolicitant: string;
    /**
     * 
     * @type {string}
     * @memberof SolicitantiAddDTO
     */
    nume: string;
    /**
     * 
     * @type {string}
     * @memberof SolicitantiAddDTO
     */
    prenume: string;
    /**
     * 
     * @type {string}
     * @memberof SolicitantiAddDTO
     */
    adresa?: string | null;
}

/**
 * Check if a given object implements the SolicitantiAddDTO interface.
 */
export function instanceOfSolicitantiAddDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dataInregistare" in value;
    isInstance = isInstance && "cnpSolicitant" in value;
    isInstance = isInstance && "nume" in value;
    isInstance = isInstance && "prenume" in value;

    return isInstance;
}

export function SolicitantiAddDTOFromJSON(json: any): SolicitantiAddDTO {
    return SolicitantiAddDTOFromJSONTyped(json, false);
}

export function SolicitantiAddDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolicitantiAddDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataInregistare': (new Date(json['dataInregistare'])),
        'cnpSolicitant': json['cnpSolicitant'],
        'nume': json['nume'],
        'prenume': json['prenume'],
        'adresa': !exists(json, 'adresa') ? undefined : json['adresa'],
    };
}

export function SolicitantiAddDTOToJSON(value?: SolicitantiAddDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataInregistare': (value.dataInregistare.toISOString()),
        'cnpSolicitant': value.cnpSolicitant,
        'nume': value.nume,
        'prenume': value.prenume,
        'adresa': value.adresa,
    };
}

