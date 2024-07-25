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

export type CorAddFormModel = {
    codCor: string;
    meserie: string;
};

export type CorAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<CorAddFormModel>>;
};

export type CorAddFormActions = {
    register: UseFormRegister<CorAddFormModel>;
    watch: UseFormWatch<CorAddFormModel>;
    handleSubmit: UseFormHandleSubmit<CorAddFormModel>;
    submit: (body: CorAddFormModel) => void;

};
export type CorAddFormComputed = {
    defaultValues: CorAddFormModel,
    isSubmitting: boolean
};

export type CorAddFormController = FormController<CorAddFormState, CorAddFormActions, CorAddFormComputed>;