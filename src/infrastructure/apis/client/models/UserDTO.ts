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
import type { UserRoleEnum } from './UserRoleEnum';
import {
    UserRoleEnumFromJSON,
    UserRoleEnumFromJSONTyped,
    UserRoleEnumToJSON,
} from './UserRoleEnum';

/**
 * 
 * @export
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UserDTO
     */
    email: string;
    /**
     * 
     * @type {UserRoleEnum}
     * @memberof UserDTO
     */
    role: UserRoleEnum;
}

/**
 * Check if a given object implements the UserDTO interface.
 */
export function instanceOfUserDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function UserDTOFromJSON(json: any): UserDTO {
    return UserDTOFromJSONTyped(json, false);
}

export function UserDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'email': json['email'],
        'role': UserRoleEnumFromJSON(json['role']),
    };
}

export function UserDTOToJSON(value?: UserDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'email': value.email,
        'role': UserRoleEnumToJSON(value.role),
    };
}

