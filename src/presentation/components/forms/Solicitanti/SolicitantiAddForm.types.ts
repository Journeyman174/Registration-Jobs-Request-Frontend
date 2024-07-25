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

export type SolicitantiAddFormModel = {
    dataInregistare: Date;
    cnpSolicitant: string;
    nume: string;
    prenume: string;
    adresa: string;
};

export type SolicitantiAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<SolicitantiAddFormModel>>;
};

export type SolicitantiAddFormActions = {
    register: UseFormRegister<SolicitantiAddFormModel>;
    watch: UseFormWatch<SolicitantiAddFormModel>;
    handleSubmit: UseFormHandleSubmit<SolicitantiAddFormModel>;
    submit: (body: SolicitantiAddFormModel) => void;

};
export type SolicitantiAddFormComputed = {
    defaultValues: SolicitantiAddFormModel,
    isSubmitting: boolean
};

export type SolicitantiAddFormController = FormController<SolicitantiAddFormState, SolicitantiAddFormActions, SolicitantiAddFormComputed>;