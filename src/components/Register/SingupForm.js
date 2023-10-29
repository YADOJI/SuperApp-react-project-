import { React, useState } from 'react'
import SingupFormStyle from "./SingupFormStyle.css"
import { useNavigate } from 'react-router-dom';
import CategoryChoice from '../../pages/CategoryChoice';


const SingupForm = () => {
  const [formData, setFormData] = useState({
    names: "",
    userName: "",
    email: "",
    number: "",
    isChecked: false
  })
  const [namesError, setNamesError] = useState(false)
  const [userNameError, setuserNameError] = useState(false)
  const [emailError, setemailError] = useState(false)
  const [numberError, setnumberError] = useState(false)
  const [singUpError, setsingUpError] = useState(false)
  const navigate = useNavigate();

  function handelChange(event) {
    const {name, type, checked, value} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  function handelSubmit(event) {
    event.preventDefault()
    let valid = true;
    if (!(formData.names.trim().length > 0)) {
      setNamesError(true)
      valid = false
    } else {
      setNamesError(false)
    }
    if (!(formData.userName.trim().length > 0)) {
      setuserNameError(true)
      valid = false;
    } else {
      setuserNameError(false)
    }
    if (!(formData.email.trim().length > 0)) {
      setemailError(true)
      valid = false;
    } else {
      setemailError(false)
    }
    if (!(formData.number.trim().length > 0)) {
      setnumberError(true)
      valid = false;
    } else {
      setnumberError(false)
    }
    if (!formData.isChecked) {
      setsingUpError(true)
      valid = false;
    } else {
      setsingUpError(false)
    }
    if (valid){
      window.localStorage.setItem("formDatas", JSON.stringify(formData))
      navigate("/categorychoice")
    }
  }

  return (
    <div className='singupform'>
      <h1 className='superapp'>Super app</h1>
      <h3 className='createaccount'>Create your new account</h3>
      <form className='form' onSubmit={handelSubmit}>
        <input type='text' name='names' value={formData.names} onChange={handelChange} className='forminput name' placeholder='Name' /><br />
        {namesError ? (<p>please fill correctly</p>) : (<></>)}
        <input type='text' name='userName' value={formData.userName} onChange={handelChange} className='forminput username' placeholder='User Name' /><br />
        {userNameError ? (<p>please fill correctly</p>) : (<></>)}
        <input type='email' name='email' value={formData.email} onChange={handelChange} className='forminput email' placeholder='Email' /><br />
        {emailError ? (<p>please fill correctly</p>) : (<></>)}
        <input type='number' name='number' value={formData.number} onChange={handelChange} className='forminput number' placeholder='Number' /><br />
        {numberError ? (<p>please fill correctly</p>) : (<></>)}
        <input type='checkbox' id='checkbox' name='isChecked' checked={formData.isChecked} onChange={handelChange} className='checkbox' />
        <label htmlFor='checkbox'>Share my registration data with Superapp</label>
        {singUpError ? (<p>please fill correctly</p>) : (<></>)}
        <button className='singup'>SING UP</button>
      </form>
      <p>By clicking on Sign up. you agree to Superapp <span> Terms and Conditions of Use </span></p>
      <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span> Privacy Policy </span></p>
    </div>
  )
}

export default SingupForm