import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import {
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Checkbox,
    InputLabel,
    FormLabel
} from '@mui/material';

type FeedbackFormInputs = {
    score: number;
    quality: 'Foarte Buna' | 'Buna' | 'Satisfacatoatre' | 'Nesatisfacatoare';
    anonimous: boolean;
    content: string;
};

const FeedbackForm: React.FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<FeedbackFormInputs>({
        defaultValues: {
            score: 0,
            quality: 'Buna',
            anonimous: false,
            content: '',
        }
    });

    const onSubmit: SubmitHandler<FeedbackFormInputs> = async (data) => {
        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Feedback submitted successfully!');
            } else {
                alert('Failed to submit feedback');
            }
        } catch (error) {
            console.error('Failed to submit feedback', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Select for Quality */}
            <FormControl fullWidth margin="normal">
                <InputLabel id="quality-label">Quality</InputLabel>
                <Controller
                    name="quality"
                    control={control}
                    render={({ field }) => (
                        <Select
                            labelId="quality-label"
                            label="Quality"
                            {...field}
                            error={!!errors.quality}
                        >
                            <MenuItem value="Foarte Buna">FoarteBuna</MenuItem>
                            <MenuItem value="Buna">Buna</MenuItem>
                            <MenuItem value="Satisfacatoare">Satisfacatoare</MenuItem>
                            <MenuItem value="Nesatisfacatoare">Nesatisfacatoare</MenuItem>
                        </Select>
                    )}
                />
            </FormControl>

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

            {/* Text box for Content */}
            <FormControl fullWidth margin="normal">
                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Feedback"
                            multiline
                            rows={4}
                            variant="outlined"
                            error={!!errors.content}
                            helperText={errors.content ? "Acest cimp este obligariu" : ""}
                        />
                    )}
                    rules={{ required: true }}
                />
            </FormControl>

            {/* Submit button */}
            <Button type="submit" variant="contained" color="primary">
                Submit Feedback
            </Button>
        </form>
    );
};

export default FeedbackForm;