import { FeedbackEnum } from "@infrastructure/apis/client";
import { FormController } from "../FormController";
import {
    UseFormHandleSubmit,
    UseFormRegister,
    FieldErrorsImpl,
    DeepRequired,
    UseFormWatch
} from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";


export type FeedbackAddFormModel = {
    score: number;
    quality: FeedbackEnum;
    anonimous: boolean;
    content:string;
};

export type FeedbackAddFormState = {
    errors: FieldErrorsImpl<DeepRequired<FeedbackAddFormModel>>;
};

export type FeedbackAddFormActions = {
    register: UseFormRegister<FeedbackAddFormModel>;
    watch: UseFormWatch<FeedbackAddFormModel>;
    handleSubmit: UseFormHandleSubmit<FeedbackAddFormModel>;
    submit: (body: FeedbackAddFormModel) => void;
    selectQuality: (value: SelectChangeEvent<FeedbackEnum>) => void;
    selectScore: (value: React.ChangeEvent<HTMLInputElement>) => void;
    selectAnonimous: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export type FeedbackAddFormComputed = {
    defaultValues: FeedbackAddFormModel,
    isSubmitting: boolean
};

export type FeedbackAddFormController = FormController<FeedbackAddFormState, FeedbackAddFormActions, FeedbackAddFormComputed>;