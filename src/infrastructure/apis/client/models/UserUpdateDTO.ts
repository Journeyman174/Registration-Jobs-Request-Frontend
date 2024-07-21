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
 * @interface UserUpdateDTO
 */
export interface UserUpdateDTO {
    /**
     * 
     * @type {string}
     * @memberof UserUpdateDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateDTO
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateDTO
     */
    password?: string | null;
}

/**
 * Check if a given object implements the UserUpdateDTO interface.
 */
export function instanceOfUserUpdateDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function UserUpdateDTOFromJSON(json: any): UserUpdateDTO {
    return UserUpdateDTOFromJSONTyped(json, false);
}

export function UserUpdateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUpdateDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function UserUpdateDTOToJSON(value?: UserUpdateDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'password': value.password,
    };
}

