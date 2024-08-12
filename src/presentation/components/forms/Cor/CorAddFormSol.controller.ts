import { CorAddFormSolController, CorAddFormSolModel } from "./CorAddFormSol.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useIntl } from "react-intl";
import * as yup from "yup";
import { isUndefined } from "lodash";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient , useQuery} from "@tanstack/react-query";
import { useCnpCalificariApi,useCorApi } from "@infrastructure/apis/api-management";
import { useCallback, useEffect } from "react";
import { UserRoleEnum } from "@infrastructure/apis/client";
import { SelectChangeEvent } from "@mui/material";
import { usePaginationController } from "../../ui/Tables/Pagination.controller";

/**
 * Use a function to return the default values of the form and the validation schema.
 * You can add other values as the default, for example when populating the form with data to update an entity in the backend.
 */
const getDefaultValues = (sid: string,uid: string,cnp: string) => {
    const initialData = {sid: sid,uid: uid,cnp:cnp};
    const defaultValues = {
        codCor: "",
	    idSolicitant:sid,
	    cnpSolicitant:cnp,
	    idCor: "",
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
const useInitCorAddFormSol = (uid: string, sid: string, cnp: string) => {
    const { formatMessage } = useIntl();
    const defaultValues = getDefaultValues(uid, sid, cnp);

    const schema = yup.object().shape({
        codCor: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.codCor",
                    }),
                }))
            .default(defaultValues.codCor),
/*        idCor: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.idCor",
                    }),
                }))
            .default(defaultValues.idCor),
*/
        idSolicitant: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.idSolicitant",
                    }),
                }))
            .default(defaultValues.idSolicitant),
        cnpSolicitant: yup.string()
            .required(formatMessage(
                { id: "globals.validations.requiredField" },
                {
                    fieldName: formatMessage({
                        id: "globals.cnpSolicitant",
                    }),
                }))
            .default(defaultValues.cnpSolicitant),
        
    });

    const resolver = yupResolver(schema);

    return { defaultValues, resolver };


}

/**
 * Create a controller hook for the form and return any data that is necessary for the form.
 */
export const useCorAddFormSolController = (uid:string,sid:string,cnp:string,onSubmit?: () => void): CorAddFormSolController => { 

   const { defaultValues, resolver } = useInitCorAddFormSol(uid,sid,cnp);


    const {getCors: { key: queryKeyCor ,query:getCors} } = useCorApi();
//    const queryClientCor = useQueryClient();
//    const { page, pageSize, setPagination } = usePaginationController();
    const { data:dataCor} = useQuery({
        queryKey: [queryKeyCor],
        queryFn: () => getCors({search:String(defaultValues.codCor)},)
    });
   

 	const { addCnpCalificari: { key: addCalificariMutationKey, mutation:addCalificariMutation }} = useCnpCalificariApi();
    const { mutateAsync: CreateCalificariMutation, status } = useMutation({
        mutationKey: [addCalificariMutationKey], 
        mutationFn: addCalificariMutation
    });

   const queryClient = useQueryClient();


   const submit = useCallback(async (data: CorAddFormSolModel) => {
    // Ensure dataCor is ready and has the expected structure
    if (!Array.isArray(dataCor?.response?.data)) {
        console.error("dataCor is not an array or is undefined", dataCor);
        return;
    }

    // Search for the item with the matching codCor
    const matchedItem = dataCor.response.data.find(item => item.codCor === data.codCor);

    if (!matchedItem) {
        console.error("No matching idCor found for codCor:", data.codCor);
        return;
    }

    // Extract idCor
    const idCor = matchedItem.id;

    try {
        // Call the mutation with the found idCor
        await CreateCalificariMutation({
            idSolicitant: String(sid),
            idCor: String(idCor),
            cnpSolicitant: String(cnp)
        });

        if (onSubmit) {
            onSubmit();
        }
    } catch (error) {
        console.error("Failed to create calificari", error);
    }
}, [CreateCalificariMutation, dataCor, onSubmit, sid, cnp]);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm<CorAddFormSolModel>({ // Use the useForm hook to get callbacks and variables to work with the form.
        defaultValues, // Initialize the form with the default values.
        
        resolver // Add the validation resolver.
    });




    return {
        actions: { // Return any callbacks needed to interact with the form.
            handleSubmit, // Add the form submit handle.
            submit, // Add the submit handle that needs to be passed to the submit handle.
            register, // Add the variable register to bind the form fields in the UI with the form variables.
            watch // Add a watch on the variables, this function can be used to watch changes on variables if it is needed in some locations.
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