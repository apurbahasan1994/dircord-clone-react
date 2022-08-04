import React from 'react'
import CustomPrimaryButton from '../../../../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../../../../shared/components/RedirectInfo'
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
const getFormNotValidMessage = () => {
    return "Username should conatins between 3 and 12 characters and password should contains between 6 and 12 characters. Also correct email address should be given";
}
const getFormValidMessage = () => {
    return "Press to register";
}
export default function RegisterPageFooter({ handleRegister, isFormValid }) {
    const history = useNavigate();
    const handlePushToRegisterPage = () => {
        history('/login');
    }
    return (
        <>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div><CustomPrimaryButton label='Register' additionalStyles={{ marginTop: '30px' }} disabled={!isFormValid} onClick={handleRegister}></CustomPrimaryButton></div>
            </Tooltip>

            <RedirectInfo text='Alreday have an account? ' redirectText='Log in' additionalStyles={{ marginTop: '5px' }} redirectHandler={handlePushToRegisterPage}></RedirectInfo>
        </>

    );
}
