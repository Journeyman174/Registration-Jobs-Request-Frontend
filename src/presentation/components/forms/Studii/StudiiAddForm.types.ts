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

export type StudiiAddFormModel = {
    denStudii: string;

};

export type StudiiAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<StudiiAddFormModel>>;
};

export type StudiiAddFormActions = {
    register: UseFormRegister<StudiiAddFormModel>;
    watch: UseFormWatch<StudiiAddFormModel>;
    handleSubmit: UseFormHandleSubmit<StudiiAddFormModel>;
    submit: (body: StudiiAddFormModel) => void;

};
export type StudiiAddFormComputed = {
    defaultValues: StudiiAddFormModel,
    isSubmitting: boolean
};

export type StudiiAddFormController = FormController<StudiiAddFormState, StudiiAddFormActions, StudiiAddFormComputed>;