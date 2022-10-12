import React from 'react'
import { Bg, Container } from '../styles/EmailVerification'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import Button from '../components/Button'
import { toast, ToastContainer} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/ReactToastify.css'
import axios from '../api/axios';

const EmailVerification = () => {
  const userEmail = JSON.parse(localStorage.getItem('userEmail'))

  const navigate = useNavigate()

  const handleResend = async () => {
    try {
      const response = await axios.post('/users/forgot-password', {
        email: userEmail.email
      })
      if(response.status === 200){
        toast.success(response.data.message);
      }

    } catch (error) {
      toast.error('Error!. Please try again')
    }
  }

  const handleCancel = () => {
    navigate('/login')
  }

  return (
    <Bg>
    {/* <ToastContainer /> */}
    <Container>
      <MdOutlineMarkEmailRead size={'100px'} color={'#03435F'}/>
      <p className='v-header'>Check your mail</p>
      <p className='v-message'>We sent a password reset link to your email. Please click the link to reset your password</p>
      <p className='v-link'>Don’t receive the email? <span onClick={handleResend}>Click to Resend link </span></p>
      <Button text={'Back to Login'} radius={0} clickHandle={handleCancel}/>

    </Container>
    </Bg>
  )
}

export default EmailVerification