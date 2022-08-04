import React from 'react'
import InputWithLabel from '../../../../../shared/components/InputWithLabel'

export default function LoginPageInputs({email,setEmail,password,setPassword}) {
  return (
    <>
   <InputWithLabel value={email} setValue={setEmail} label="E-mail" type="text" placeholder="Enter email address"></InputWithLabel>
   <InputWithLabel value={password} setValue={setPassword} label="Password" type="password" placeholder="Enter password"></InputWithLabel>
    </>
  )
}
