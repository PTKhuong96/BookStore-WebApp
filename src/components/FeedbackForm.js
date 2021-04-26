import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));

const FeedbackForm = () => {
    // Handle form values changes
    const [formInputValues, setFormInputValues] = useState({
        feedbackType: '1',
        feedbackDescription: '',
        firstName: '',
        lastName: '',
        email: ''
     });

    const handleChange = event => {
        setFormInputValues({...formInputValues, [event.target.name]: event.target.value})
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    

        //await axios.post(`http://localhost:57798/api/feedbacks`, 
        await axios.post(`Book-Elas-1BGN3W0OCRXSM.eba-d24rbv4d.us-east-1.elasticbeanstalk.com/api/feedbacks`, 
            {
                type: parseInt(formInputValues.feedbackType),
                description: formInputValues.feedbackDescription,
                firstName: formInputValues.firstName,
                lastName: formInputValues.lastName,
                email: formInputValues.email 
            } 
        )
        .then(res => {
            <Snackbar open={true} autoHideDuration={6000}>
                <Alert severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        })
    }

    // Handle styling
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <p className={classes.paper}>We would love to hear your thoughts, concerns or problems with anything so we can improve!</p>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                        <FormLabel component="legend">Feedback type:</FormLabel>
                        <RadioGroup row aria-label="feedback type" name="feedbackType" onChange={handleChange}>
                            <FormControlLabel value="1" control={<Radio />} label="Comment" />
                            <FormControlLabel value="2" control={<Radio />} label="Bug" />
                            <FormControlLabel value="3" control={<Radio />} label="Question" />
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <label>
                                Describe Feedback: *
                            </label>
                        </div>
                        <div className="textarea-input">
                            <textarea
                                onChange={handleChange}
                                name="feedbackDescription"
                                Placeholder="Describe your feedback"
                                rows={5}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Name: *</p>
                    </Grid>
                    <Grid item xs={4}>
                    <input
                        type="text"
                        className="name-input-first-name"
                        name="firstName"
                        placeholder="First name"
                        onChange={handleChange}
                    />
                    </Grid>
                    <Grid item xs={8}>
                        <input
                            type="text"
                            className="name-input-last-name"
                            name="lastName"
                            placeholder="First name"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p>Email: *</p>
                        <input
                            type="email"
                            className="name-input-last-name"
                            name="email"
                            placeholder="ex: youremail@example.com"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid items xs={12}>
                        <button class="submit-button" type="submit">Submit</button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default FeedbackForm;