import { Button } from '@mui/material';
import React from 'react';

export default function CustomPrimaryButton(props) {
    const { label, additionalStyles, disabled, onClick } = props;
    return (
        <Button variant='contained' sx={{
            bgcolor: '#5865F2',
            color: 'white',
            textTransform: 'none',
            fontSize: '16px',
            width: '100%',
            height: '40px'
        }} style={additionalStyles ? additionalStyles : {}} disabled={disabled} onClick={onClick}>{label}</Button>
    )
}
