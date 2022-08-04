import React from 'react'
import InputWithLabel from '../../../../../shared/components/InputWithLabel'

export default function RegisterPageInputs({ email, setEmail, username, setUserName, password, setPassword }) {
    return (
        <>
            <InputWithLabel value={email} setValue={setEmail} label="E-mail address" type="text" placeholder="Enter email address" ></InputWithLabel>
            <InputWithLabel value={username} setValue={setUserName} label="Username" type="text" placeholder="Enter username"></InputWithLabel>
            <InputWithLabel value={password} setValue={setPassword} label="Password" type="password" placeholder="Enter password"></InputWithLabel>
        </>
    )
}
