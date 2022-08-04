import { Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import AuthBox from '../../../shared/components/AuthBox'
import { validateRegisterForm } from '../../../shared/Utils/validators';
import RegisterPageFooter from './Components/RegisterPageFooter/RegisterPageFooter';
import RegisterPageInputs from './Components/RegisterPageInputs/RegisterPageInputs';
import { getActions } from '../../../store/actions/authActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function RegisterPage({ register }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const history = useNavigate();
    const handleRegister = () => {
        register({
            email, password, username
        }, history);
    };
    useEffect(() => {
        setIsFormValid(validateRegisterForm(email, username, password));

    }, [email, username, password, setIsFormValid]);

    return (
        <AuthBox>
            <Typography variant='h5' sx={{ color: 'white' }}>Create an account</Typography>
            <RegisterPageInputs email={email} setEmail={setEmail} username={username} setUserName={setUserName} password={password} setPassword={setPassword}></RegisterPageInputs>
            <RegisterPageFooter handleRegister={handleRegister} isFormValid={isFormValid}></RegisterPageFooter>
        </AuthBox>
    )
}
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    };
}
export default connect(null, mapActionsToProps)(RegisterPage);