import { FeedbackAddFormController, FeedbackAddFormModel } from "./FeedbackAddForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { isUndefined } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFeedbackApi } from "@infrastructure/apis/api-management";
import { useCallback } from "react";
import { FeedbackEnum } from "@infrastructure/apis/client";
import { SelectChangeEvent } from "@mui/material";
import React from "react";
import { Score } from "@mui/icons-material";


/**
 * Use a function to return the default values of the form and the validation schema.
 * You can add other values as the default, for example when populating the form with data to update an entity in the backend.
 */
const getDefaultValues = (initialData?: FeedbackAddFormModel) => {
    const defaultValues = {
        score: 5,
        quality: 'Buna' as FeedbackEnum,
        anonimous: false,
        content: '',
};

    if (!isUndefined(initialData)) {
        return {
            ...defaultValues,
            ...initialData,
        };
    }

    return defaultValues;
};

/**
 * Create a hook to get the validation schema.
 */
const useInitFeedbackAddForm = () => {
    const { formatMessage } = useIntl();
    const defaultValues = getDefaultValues();

    const schema = yup.object().shape({
        score: yup.number()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.score",
                    }),
                }))
           .default(defaultValues.score),
        anonimous: yup.boolean()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.anonimous",
                    }),
                }))
                .default(defaultValues.anonimous),
        quality: yup.string()
        .oneOf([ // The select input should have one of these values.
            FeedbackEnum.FoarteBuna,
            FeedbackEnum.Buna,
            FeedbackEnum.Satificatoare,
            FeedbackEnum.Nesatificatoare
        ])
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.quality",
                    }),
                }))
                .default(defaultValues.quality),
        content: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.content",
                    }),
                }))
                .default(defaultValues.content),
    });

    const resolver = yupResolver(schema);

    return { defaultValues, resolver };
}

/**
 * Create a controller hook for the form and return any data that is necessary for the form.
 */
export const useFeedbackAddFormController = (onSubmit?: () => void): FeedbackAddFormController => {
    const { defaultValues, resolver } = useInitFeedbackAddForm();
    const { addFeedback: { mutation, key: mutationKey }, getFeedbacks: { key: queryKey } } = useFeedbackApi();
    const { mutateAsync: add, status } = useMutation({
        mutationKey: [mutationKey], 
        mutationFn: mutation
    });
    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm<FeedbackAddFormModel>({ // Use the useForm hook to get callbacks and variables to work with the form.
       defaultValues, // Initialize the form with the default values.
        resolver // Add the validation resolver.
    });
    const selectQuality = useCallback((event: SelectChangeEvent<FeedbackEnum>) => { // Select inputs are tricky and may need their on callbacks to set the values.
        setValue("quality", event.target.value as FeedbackEnum, {
            shouldValidate: true,
        });
        console.log(event.target.value);
    }, [setValue]);

    const selectScore = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue("score",parseInt(event.target.value), {
            shouldValidate: true,
        });
        console.log(event.target.value);
    }, [setValue]);
    const selectAnonimous = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue("anonimous", event.target.checked, {
            shouldValidate: true,  // This triggers validation after updating the value
        });
        console.log(event.target.value);
    }, [setValue]);

    const submit = useCallback((data: FeedbackAddFormModel) => // Create a submit callback to send the form data to the backend.
        add(data).then(() => {
            queryClient.invalidateQueries({ queryKey: [queryKey] }); // If the form submission succeeds then some other queries need to be refresh so invalidate them to do a refresh.

            if (onSubmit) {
                onSubmit();
            }
        }), [add, queryClient, queryKey]);

    return {
        actions: { // Return any callbacks needed to interact with the form.
            handleSubmit, // Add the form submit handle.
            submit, // Add the submit handle that needs to be passed to the submit handle.
            register, // Add the variable register to bind the form fields in the UI with the form variables.
            watch, // Add a watch on the variables, this function can be used to watch changes on variables if it is needed in some locations.
            selectScore,
            selectQuality,
            selectAnonimous,
        },
        computed: {
            defaultValues,
            isSubmitting: status === "pending" // Return if the form is still submitting or nit.
        },
        state: {
            errors // Return what errors have occurred when validating the form input.
        }
    }
}