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
    Radio,
    RadioGroup,
    Checkbox,

} from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { useFeedbackAddFormController } from "./FeedbackAddForm.controller";
import { isEmpty, isUndefined } from "lodash";
import { FeedbackEnum } from "@infrastructure/apis/client";
import FormControlLabel from '@mui/material/FormControlLabel';
import React from "react";
//import { Score } from "@mui/icons-material";



/**
 * Here we declare the user add form component.
 * This form may be used in modals so the onSubmit callback could close the modal on completion.
 */
export const FeedbackAddForm = (props: { onSubmit?: () => void }) => {
    const { formatMessage } = useIntl();
    const { state, actions, computed } = useFeedbackAddFormController(props.onSubmit); // Use the controller.

/*    const [value,setSelectedRadioBtn] =React.useState(5);
//    const handleRadioClick = (e:React.ChangeEvent<HTMLInputElement>):void => {
//        setSelectedRadioBtn(parseInt(e.currentTarget.value));
        console.log(e.target.value);
    }
*/
    return <form onSubmit={actions.handleSubmit(actions.submit)}> {/* Wrap your form into a form tag and use the handle submit callback to validate the form and call the data submission. */}
        <Stack spacing={4} style={{ width: "100%" }}>
            <div>
                <Grid container item direction="row" xs={12} columnSpacing={4}>




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
                                <MenuItem value={FeedbackEnum.FoarteBuna}>
                                    <FormattedMessage id="globals.Foartebuna" />
                                </MenuItem>
                                <MenuItem value={FeedbackEnum.Buna}>
                                    <FormattedMessage id="globals.Buna" />
                                </MenuItem>
                                <MenuItem value={FeedbackEnum.Satificatoare}>
                                    <FormattedMessage id="globals.Satisfacatoare" />
                                </MenuItem>
                                <MenuItem value={FeedbackEnum.Nesatificatoare}>
                                    <FormattedMessage id="globals.Nesatisfacatoare" />
                                </MenuItem>
                            </Select>
                            <FormHelperText
                                hidden={isUndefined(state.errors.quality)}
                            >
                                {state.errors.quality?.message}
                            </FormHelperText>
                            <FormHelperText>
                                    Selected Quality: {actions.watch("quality")}
                            </FormHelperText>    
                        </FormControl>
                    </Grid>


 

                    {/* Checkbox for Anonimous */}
                    <Grid container item direction="column" xs={6} md={6}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.anonimous)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.anonimous" />
                            </FormLabel>
                            <Checkbox
                             {...actions.register("anonimous")}
//                             onChange={actions.watch("anonimous")}  // Bind the checked state to the form state
                             onChange={actions.selectAnonimous}    // Handle the change event
                                />
                            <FormHelperText
                                hidden={isUndefined(state.errors.anonimous)}
                            >
                                {state.errors.anonimous?.message}
                            </FormHelperText>
                            {/* Display the selected value 
                        <Grid container item direction="column" xs={6} md={6}>
                            <div>
                                Anonimous Selected Value:
                                {String(actions.watch("anonimous"))} {/* Display the current value as "true" or "false" 
                            </div>
                        </Grid>
                        */}
                            <FormHelperText>
                                Anonimous Selected Value:
                                {String(actions.watch("anonimous"))} {/* Display the current value as "true" or "false" */}
                            </FormHelperText>                        
                        </FormControl>
                    </Grid>



                    <Grid container item direction="column" xs={6} md={12}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.content)}
                        >
                            <FormLabel required>
                                <FormattedMessage id="globals.content" />
                            </FormLabel>
                            <OutlinedInput
                                {...actions.register("content")}
                                placeholder={formatMessage(
                                    { id: "globals.placeholders.textInput" },
                                    {
                                        fieldName: formatMessage({
                                            id: "globals.content",
                                        }),
                                    })}
                                autoComplete="none"
                            />
                            <FormHelperText
                                hidden={isUndefined(state.errors.content)}
                            >
                                {state.errors.content?.message}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>

           {/* Radio buttons for Score */}
           <Grid container item direction="column" xs={6} md={8}>
                        <FormControl
                            fullWidth
                            error={!isUndefined(state.errors.score)}
                        > {/* Wrap the input into a form control and use the errors to show the input invalid if needed. */}
                        <FormLabel required>
                                <FormattedMessage id="globals.score" />
                        </FormLabel> {/* Add a form label to indicate what the input means. */}
                        <RadioGroup 
//                            {...actions.register("score")}
//                            value={value}
                            value={actions.watch("score")}                           
                             onChange={actions.selectScore} // Selects may need a listener to for the variable change. 
//                            onChange={handleRadioClick}

                            defaultValue={actions.watch("score")}  
                            row> {/*} Bind the form variable to the UI input. */}
                            <FormControlLabel value={1} {...actions.register("score")} control={<Radio />}  label="1" /> 
                            <FormControlLabel value={2} {...actions.register("score")} control={<Radio />}  label="2" />
                            <FormControlLabel value={3} {...actions.register("score")} control={<Radio />}  label="3" />
                            <FormControlLabel value={4} {...actions.register("score")} control={<Radio />}  label="4" />
                            <FormControlLabel value={5} {...actions.register("score")} control={<Radio />}  label="5" />
                        </RadioGroup>

                        <FormHelperText
                                hidden={isUndefined(state.errors.score)}
                            >
                                {state.errors.score?.message}
                        </FormHelperText> {/* Add a helper text that is shown then the input has a invalid value. */}
                                {/* Display the selected score */}
                                <FormHelperText>
                                    Selected Score: {actions.watch("score")}
                                </FormHelperText>
                        </FormControl>
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