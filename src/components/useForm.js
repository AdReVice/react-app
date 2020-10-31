import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {

        const { name, value } = e.target
        // setValues(prevState => {
        //     prevState.values[name] =  value;
        //     return {
        //         values: prevState.values
        //     };
        // });
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
        console.log(values)
        if (validateOnChange){
            console.log(name)
            validate({ [name]: value })
        }
    }

    // // handle click event of the Add button
    // const handleAddClick = e => {
    //     console.log(e)
    //     const { name, value } = e.target,
    //     setValues({...values, name: value});
    // };

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({
                    })
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
        //handleAddClick

    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

