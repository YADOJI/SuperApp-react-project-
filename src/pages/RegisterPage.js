import React from 'react'
import SingupForm from '../components/Register/SingupForm'
import Banner from '../components/Register/Banner'

const RegisterPage = () => {
  return (
    <div style={{display: "flex"}}>
        <Banner />
        <SingupForm />
    </div>
  )
}

export default RegisterPage