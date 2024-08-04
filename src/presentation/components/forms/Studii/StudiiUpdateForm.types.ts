import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";
import { UserDTOPagedResponse } from "@infrastructure/apis/client";

export type StudiiUpdateFormModel = {
    denStudii: string;
};

export type StudiiUpdateFormState = {
    errors: FieldErrorsImpl<DeepRequired<StudiiUpdateFormModel>>;
};

export type StudiiUpdateFormActions = {
    register: UseFormRegister<StudiiUpdateFormModel>;
    watch: UseFormWatch<StudiiUpdateFormModel>;
    handleSubmit: UseFormHandleSubmit<StudiiUpdateFormModel>;
    submit: (body: StudiiUpdateFormModel) => void;
};
export type StudiiUpdateFormComputed = {
    defaultValues: StudiiUpdateFormModel,
    isSubmitting: boolean
};

export type StudiiUpdateFormController = FormController<StudiiUpdateFormState, StudiiUpdateFormActions, StudiiUpdateFormComputed>;