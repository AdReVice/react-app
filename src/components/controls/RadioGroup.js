import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default function RadioGroup(props) {

    const { name, label, value, onChange, items } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {
                    items.map(
                        item => (
                            <FormControlLabel key={item.key} value={item.key} control={<Radio />} label={item.value} />
                        )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}
