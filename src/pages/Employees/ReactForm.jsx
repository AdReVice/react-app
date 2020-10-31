import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import fetch from 'axios';
import * as constants from '../../components/constants/AppConstants'

const useStyles = makeStyles(theme=>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);


export default function Login() {
  const classes = useStyles();
 
  let loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  const { register, handleSubmit, errors,watch} = useForm({
    validationSchema: loginSchema
  });
  const emailId  = watch("email")
  const onSubmit = (values) => {
    console.log(values);
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': 'foobar'
      },
      body: JSON.stringify({ title: 'React POST Request Example' })
    };
    return fetch(constants.API_URL, requestOptions)
      .then(response => response.json())
      // .then(data => this.setState({ postId: data.id }));
      
    // return fetch(constants.API_URL, {
    //   method: 'POST',
    //   mode: 'CORS',
    //   body: values,
    //   headers: {
    //       'Content-Type': 'application/json'
    //   }
    // }).then(res => {
    //     return res;
    // }).catch(err => err);

  }


  return (
    <div className={classes.root}>
      <Box mt={5} px={2}>
        <Grid container spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Paper className={classes.paper}>
              <Typography variant="h3" gutterBottom>
                Login
                        </Typography>
              <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
                <TextField
                  name="email"
                  inputRef={register}
                  label="Enter email"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  error={errors.email ? true : false}
                />
                { emailId == "abc" &&
                <TextField
                  name="password"
                  type="password"
                  inputRef={register}
                  label="Enter password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  error={errors.email ? true : false}
                />
                }
                <Button className={classes.button} type="submit" variant="outlined" aria-label="delete" color="primary" >
                  Continue
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}