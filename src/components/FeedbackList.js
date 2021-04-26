import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Loader from './Loader';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllFeedbacks = async () => {
        //const feedbacksData = await axios(`http://localhost:57798/api/feedbacks`);
        const feedbacksData = await axios(`http://www.Book-Elas-1BGN3W0OCRXSM.eba-d24rbv4d.us-east-1.elasticbeanstalk.com/api/feedbacks`);
        return await feedbacksData.data;
    }

    const CreateData = (id, firstName, lastName, type, createdDate, description) => {
        let displayedType = 'Comment';
        if (type === 2) {
            displayedType = 'Bug';
        } else if (type === 3) {
            displayedType = 'Question';
        }

        let fullName = firstName + ' ' + lastName;

        let currentDateTime = new Date(createdDate);
        let displayedDate = currentDateTime.getDate() + '/' + currentDateTime.getMonth() + '/' + currentDateTime.getFullYear();
        
        return { id, fullName, displayedType, displayedDate, description };
    }

    useEffect(() => {
        getAllFeedbacks().then(feedbacksData => {
            setFeedbacks(feedbacksData.map(feedback => {
                return CreateData(
                    feedback.id, 
                    feedback.firstName, 
                    feedback.lastName, 
                    feedback.type, 
                    feedback.createdDate,
                    feedback.description
                );
            }))

            setIsLoading(false);
        }
        ).catch(err => { console.log(err)});
    }, []);

    // React Hooks must be called in the exact same order in every component render.
    const classes = useStyles();

    if (isLoading) {
        return <Loader />;
    }
    
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Date Created</TableCell>
              <TableCell align="left">Preview Content</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbacks.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.fullName}</TableCell>
                <TableCell align="left">{row.displayedType}</TableCell>
                <TableCell align="left">{row.displayedDate}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left"><FontAwesomeIcon icon={faTrash} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default FeedbackList;