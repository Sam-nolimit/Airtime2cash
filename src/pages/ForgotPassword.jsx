import React, { useState } from 'react'
import Button from '../components/Button'
import { Bg, Container } from '../styles/ForgotPassword'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import axios from '../api/axios';
import ProgressBar from '../components/ProgressBar';

const ForgotPassword = () => {
  const [focused, setFocused] = useState(false)
  const [email, setEmail] = useState({ email: '' })
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(0);

  const navigate = useNavigate()

  const handleEmail = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmail({...email, [name]: value})
  }

  const handleSubmit = async () => {
    setLoading((prev)=> !prev)
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 1000); 
    try{
      const response = await axios.post('/users/forgot-password', {
        ...email
      })

      if(response.status === 200){
        setLoading((prev)=> !prev)
        localStorage.setItem('userEmail', JSON.stringify({...email}))
        toast.success(response.data.message);
        
        setTimeout(()=> {
          navigate('/verification')
        }, 3000)
      }
      clearTimeout()
      clearInterval()
    } 
    catch (error) {
      setLoading((prev)=> !prev)
      toast.error('Invalid Email')
    }

  }

  const handleBack = () => {
    navigate('/login')
  }

  const handleFocus = (e) => {
    e.preventDefault()
    setFocused((prev) => !prev)
  }

  return (
    <Bg>
    <ToastContainer/>
    <Container>
      <div className='content'>
          <p className='f-password'>Forget Password</p>
          <p className='f-header'>Enter the email associated with your account and we’ll send an email with instruction to reset your password</p>
          <form className='f-form' onSubmit={handleSubmit}>
            <label className='f-label'>Email</label>
            <input type={'email'} name={'email'} placeholder={'Enter your email'} value={email.email || ''} onChange={handleEmail} onBlur={handleFocus} focused={`${focused.toString()}`} required/>
            <span className='errorMsg'>{'Enter a valid Email'}</span>
            <Button text={'Reset password'} type={'submit'} clickHandle={handleSubmit}/>
          {
            loading ? <ProgressBar bgcolor={"#DE3D6D"} completed={completed}/> : ''
          }
          </form>
          <div  className='backtologin'>
            <Button flag={'primary'} text={'Back to Login'} clickHandle={handleBack}/>
          </div>
      </div>
    </Container>
    </Bg>
  )
}

export default ForgotPassword