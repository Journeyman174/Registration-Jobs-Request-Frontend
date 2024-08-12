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

export type StudiiAddFormSolModel = {
    idSolicitant: string;
    cnpSolicitant: string;
//    idStudii: string;
    denStudii: string;
};

export type StudiiAddFormSolState = {
    errors: FieldErrorsImpl<DeepRequired<StudiiAddFormSolModel>>;
};
export type StudiiAddFormSolActions = {
    register: UseFormRegister<StudiiAddFormSolModel>;
    watch: UseFormWatch<StudiiAddFormSolModel>;
    handleSubmit: UseFormHandleSubmit<StudiiAddFormSolModel>;
    submit: (body: StudiiAddFormSolModel) => void;

};
export type StudiiAddFormSolComputed = {
    defaultValues: StudiiAddFormSolModel,
    isSubmitting: boolean
};

export type StudiiAddFormSolController = FormController<StudiiAddFormSolState, StudiiAddFormSolActions, StudiiAddFormSolComputed>;