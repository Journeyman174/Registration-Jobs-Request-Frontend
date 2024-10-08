import {
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Stack,
    OutlinedInput,
    Select,
    MenuItem,
    TextareaAutosize
} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { useCorAddFormSolController } from "./CorAddFormSol.controller";
import { isEmpty, isUndefined } from "lodash";
import { UserRoleEnum } from "@infrastructure/apis/client";
import { useState } from "react";

/**
 * Here we declare the user add form component.
 * This form may be used in modals so the onSubmit callback could close the modal on completion.
 */
export const CorAddFormSol = (props: { onSubmit?: () => void,uid:string ,sid:string,cnp:string}) => {
    const { formatMessage } = useIntl();


    const { state, actions, computed } = useCorAddFormSolController(props.uid,props.sid,props.cnp,props.onSubmit); // Use the  form controller

    return (
        <form onSubmit={actions.handleSubmit(actions.submit)}> {/* Wrap your form into a form tag and use the handle submit callback to validate the form and call the data submission. */}
            <Stack spacing={4} style={{ width: "100%" }}>
                <div>
                    <Grid container item direction="row" xs={12} columnSpacing={4}>
                        <Grid container item direction="column" xs={6} md={6}>
                            <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.codCor)}
                        > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                            <FormLabel required>
                                <FormattedMessage id="globals.codCor" />
                            </FormLabel> {/* Add a form label to indicate what the input means. */}
                            <OutlinedInput
                                {...actions.register("codCor")} // Bind the form variable to the UI input.

                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.codCor",
                                        }),
                                    })}

                                autoComplete={"none"}
                            /> {/* Add a input like a textbox shown here. */}
                            <FormHelperText
                                hidden={isUndefined(state.errors.codCor)}
                            >
                                {state.errors.codCor?.message}
                            </FormHelperText> {/* Add a helper text that is shown then the input has a invalid value. */}
                        </FormControl>
                    </Grid>
                    </Grid>
                    <Grid container item direction="row" xs={12} className="padding-top-sm">
                        <Grid container item direction="column" xs={12} md={7}></Grid>
                        <Grid container item direction="column" xs={5}>
                            <Button type="submit" disabled={!isEmpty(state.errors) || computed.isSubmitting}>
                                {!computed.isSubmitting && <FormattedMessage id="globals.submit" />}
                                {computed.isSubmitting && <CircularProgress />}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Stack>
        </form>
    );
};