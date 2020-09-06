import React from 'react'
import { FormLabel } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value, error = null, onChange } = props;
    return ( <FormLabel variant = "outlined"/>
    )
}