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
    MenuItem
    Radio,
    RadioGroup,
    Checkbox,

} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { useCorAddFormController } from "./CorAddForm.controller";
import { isEmpty, isUndefined } from "lodash";
import { FeedbackEnum } from "@infrastructure/apis/client";

/**
 * Here we declare the user add form component.
 * This form may be used in modals so the onSubmit callback could close the modal on completion.
 */
export const FeedbackAddForm = (props: { onSubmit?: () => void }) => {
    const { formatMessage } = useIntl();
    const { state, actions, computed } = useFeedbackAddFormController(props.onSubmit); // Use the controller.

    return <form onSubmit={actions.handleSubmit(actions.submit)}> {/* Wrap your form into a form tag and use the handle submit callback to validate the form and call the data submission. */}
        <Stack spacing={4} style={{ width: "100%" }}>
            <div>
                <Grid container item direction="row" xs={12} columnSpacing={4}>
                   <Grid container item direction="column" xs={6} md={6}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.score)}
                        > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                            <FormLabel required>
                                <FormattedMessage id="globals.score" />
                            </FormLabel> {/* Add a form label to indicate what the input means. */}
                            <OutlinedInput
                                {...actions.register("score")} // Bind the form variable to the UI input.
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.name",
                                        }),
                                    })}
                                autoComplete="none"
                            /> {/* Add a input like a textbox shown here. */}
                            <FormHelperText
                                hidden={isUndefined(state.errors.score)}
                            >
                                {state.errors.score?.message}
                            </FormHelperText> {/* Add a helper text that is shown then the input has a invalid value. */}
                        </FormControl>
                    </Grid>

			 {/* Select for Quality */}
                    <Grid container item direction="column" xs={6} md={6}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.quality)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.quality" />
                            </FormLabel>
                            <Select
                                {...actions.register("quality")}
                                value={actions.watch("quality")}
                                onChange={actions.selectQuality} // Selects may need a listener to for the variable change.
                                displayEmpty
                            >
                                <MenuItem value="" disabled> {/* Add the select options, the first here is used as a placeholder. */}
                                    <span className="text-gray">
                                        {formatMessage({ id: "globals.placeholders.selectInput" }, {
                                            fieldName: formatMessage({
                                                id: "globals.quality",
                                            }),
                                        })}
                                    </span>
                                </MenuItem>
                                <MenuItem value={FeedbackEnum.Buna}>
                                    <FormattedMessage id="globals.buna" />
                                </MenuItem>
                                <MenuItem value={FeedbackEnum.Buna}>
                                    <FormattedMessage id="globals.buna" />
                                </MenuItem>
                            </Select>
                            <FormHelperText
                                hidden={isUndefined(state.errors.quality)}
                            >
                                {state.errors.quality?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>



            {/* Radio buttons for Score */}
            <FormControl fullWidth margin="normal">
                <FormLabel>Score</FormLabel>
                <Controller
                    name="score"
                    control={control}
                    render={({ field }) => (
                        <RadioGroup {...field} row>
                            <FormControlLabel value={1} control={<Radio />} label="1" />
                            <FormControlLabel value={2} control={<Radio />} label="2" />
                            <FormControlLabel value={3} control={<Radio />} label="3" />
                            <FormControlLabel value={4} control={<Radio />} label="4" />
                            <FormControlLabel value={5} control={<Radio />} label="5" />
                        </RadioGroup>
                    )}
                />
            </FormControl>


            {/* Checkbox for Anonimous */}
            <FormControlLabel
                control={
                    <Controller
                        name="anonimous"
                        control={control}
                        render={({ field }) => <Checkbox {...field} />}
                    />
                }
                label="Submit anonymously"
            />






                    <Grid container item direction="column" xs={6} md={6}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.meserie)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.meserie" />
                            </FormLabel>
                            <OutlinedInput
                                {...actions.register("meserie")}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.meserie",
                                        }),
                                    })}
                                autoComplete="none"
                            />
                            <FormHelperText
                                hidden={isUndefined(state.errors.meserie)}
                            >
                                {state.errors.meserie?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item direction="row" xs={12} className="padding-top-sm">
                    <Grid container item direction="column" xs={12} md={7}></Grid>
                    <Grid container item direction="column" xs={5}>
                        <Button type="submit" disabled={!isEmpty(state.errors) || computed.isSubmitting}> {/* Add a button with type submit to call the submission callback if the button is a descended of the form element. */}
                            {!computed.isSubmitting && <FormattedMessage id="globals.submit" />}
                            {computed.isSubmitting && <CircularProgress />}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Stack>
    </form>
};