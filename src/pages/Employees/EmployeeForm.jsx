import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as employeeService from "../../services/employeeService";
import * as postMethods from '../../components/routers/formSubmitRouter'
import * as contants from '../../components/constants/AppConstants'
import EmployeeList from '../../components/routers/questionJson'
const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm() {
    
    const validate = (fieldValues = values) => {
        console.log(values)
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues){
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
            if(!temp.email)
            temp.email = fieldValues.email ? "" : "This field is required."
        }
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const { employeeData } = EmployeeList;
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
        prevVal
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            employeeService.insertEmployee(values)
            console.log(values)
            postMethods.componentDidMount(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12}>
                {   console.log(employeeData) && 
                    EmployeeList.data.questionMstRespDtlList.map(function(item, index) {
                            switch(item.answerType) {
                            case "10":
                                return <Controls.Input
                                        label={item.questionLabel}
                                        name={item.questionCode}
                                        onChange={handleInputChange}
                                        // error={errors.item.questionCode}
                                    />
                            case "20":
                                return <Controls.Select
                                        label={item.questionLabel}
                                        name={item.questionCode}
                                        onChange={handleInputChange}
                                        options={item.possibleAnswerValues}
                                       // error={errors.item.questionCode}
                                    />
                            case "30":
                                return <Controls.RadioGroup
                                        label={item.questionLabel}
                                        name={item.questionCode}
                                        onChange={handleInputChange}
                                        items={item.possibleAnswerValues}
                                        // error={errors.item.questionCode}
                                    />
                            }
                        })
                }
                </Grid>
                <Grid>
                { <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                    }
                </Grid>
            </Grid>
        </Form>
    )
}
