import { UserRoleEnum } from "@infrastructure/apis/client";
import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";

export type CorAddFormSolModel = {
    idSolicitant: string;
    cnpSolicitant: string;
//    idCor: string;
    codCor: string;
};

export type CorAddFormSolState = {
    errors: FieldErrorsImpl<DeepRequired<CorAddFormSolModel>>;
};

export type CorAddFormSolActions = {
    register: UseFormRegister<CorAddFormSolModel>;
    watch: UseFormWatch<CorAddFormSolModel>;
    handleSubmit: UseFormHandleSubmit<CorAddFormSolModel>;
    submit: (body: CorAddFormSolModel) => void;

};
export type CorAddFormSolComputed = {
    defaultValues: CorAddFormSolModel,
    isSubmitting: boolean
};

export type CorAddFormSolController = FormController<CorAddFormSolState, CorAddFormSolActions, CorAddFormSolComputed>;