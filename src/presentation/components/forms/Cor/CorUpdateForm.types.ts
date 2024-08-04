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

export type CorUpdateFormModel = {
    codCor: string ;
    meserie: string ;
};

export type CorUpdateFormState = {
    errors: FieldErrorsImpl<DeepRequired<CorUpdateFormModel>>;
};

export type CorUpdateFormActions = {
    register: UseFormRegister<CorUpdateFormModel>;
    watch: UseFormWatch<CorUpdateFormModel>;
    handleSubmit: UseFormHandleSubmit<CorUpdateFormModel>;
    submit: (body: CorUpdateFormModel) => void;
};
export type CorUpdateFormComputed = {
    defaultValues: CorUpdateFormModel,
    isSubmitting: boolean
};

export type CorUpdateFormController = FormController<CorUpdateFormState, CorUpdateFormActions, CorUpdateFormComputed>;