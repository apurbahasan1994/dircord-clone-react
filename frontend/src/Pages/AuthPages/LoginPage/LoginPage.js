import React, { useState,useEffect } from 'react';
import AuthBox from '../../../shared/components/AuthBox';
import { validateLoginForm } from '../../../shared/Utils/validators';
import LoginPageFooter from './components/LoginPageFooter/LoginPageFooter';
import LoginPageHeader from './components/LoginPageHeader';
import LoginPageInputs from './components/LoginPageInputs/LoginPageInputs';
import {connect} from 'react-redux';
import { getActions } from '../../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';function LoginPage({login}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const history = useNavigate();
    useEffect(()=>{
        setIsFormValid(validateLoginForm(email,password));
    },[email,password,setIsFormValid]);
    const handleLogin = () => {
        login({
            email,
            password
        },history);
    };
    return (
        <AuthBox>
            <LoginPageHeader></LoginPageHeader>
            <LoginPageInputs email={email} setEmail={setEmail} password={password} setPassword={setPassword}></LoginPageInputs>
            <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}></LoginPageFooter>
        </AuthBox>
    )
}
const mapActionsToProps=(dispatch)=>{
    return {
        ...getActions(dispatch)
    };
}
export default connect(null,mapActionsToProps)(LoginPage);
