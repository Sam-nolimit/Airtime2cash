import React, {useState} from 'react'
import Button from '../components/Button'
import { Bg, Container } from '../styles/ResetPassword'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import axios from '../api/axios';

const ResetPassword = () => {
  const [password, setPassword] = useState({ password: '', confirmPassword: '' })
  const { id } = useParams()
  const navigate = useNavigate()

  const handlePasswordInput = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setPassword({...password, [name]:value})
  }

  const handleReset = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post(`/users/change-password/${id}`, {
        ...password
      })

      if(response.status === 201){
        toast.success(response.data.message)
        setPassword({ password: '', confirmPassword: '' })

        setTimeout(() => {
          navigate('/login')
        }, 5000)
      }
      clearTimeout()
    } catch (error) {
      toast.error('Error, Please try again')
    }
  }

  return (
    <Bg>
    {/* <ToastContainer /> */}
    <Container>
      <div className='logo'>
        <svg width="32" height="56" viewBox="0 0 32 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_8_242)">
          <path d="M30.5 11.676L19.892 0L0 22.16H21.088L30.5 11.676Z" fill="url(#paint0_linear_8_242)"/>
          <path d="M10.6039 33.8401L1.19189 44.3201L11.7999 56.0001L31.6919 33.8401H10.6039Z" fill="url(#paint1_linear_8_242)"/>
          <path d="M10.604 33.8399L20.356 22.9719L21.088 22.1599H0L10.604 33.8399Z" fill="url(#paint2_linear_8_242)"/>
          <path d="M10.604 33.8399H31.692L21.088 22.1599L20.356 22.9719L10.604 33.8399Z" fill="url(#paint3_linear_8_242)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_8_242" x1="25.544" y1="6.356" x2="3.91999" y2="26.572" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFE770"/>
          <stop offset="1" stop-color="#FFAA4F"/>
          </linearGradient>
          <linearGradient id="paint1_linear_8_242" x1="5.9759" y1="49.7401" x2="27.7679" y2="29.6361" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F55684"/>
          <stop offset="1" stop-color="#CF2D5D"/>
          </linearGradient>
          <linearGradient id="paint2_linear_8_242" x1="5.304" y1="27.9959" x2="17.248" y2="17.4639" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F0764A"/>
          <stop offset="1" stop-color="#FFAA4F"/>
          </linearGradient>
          <linearGradient id="paint3_linear_8_242" x1="26.38" y1="28.0079" x2="15.004" y2="38.3479" gradientUnits="userSpaceOnUse">
          <stop stop-color="#911C4B"/>
          <stop offset="1" stop-color="#CF2D5D"/>
          </linearGradient>
          <clipPath id="clip0_8_242">
          <rect width="32" height="56" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <h3>Airtime<span>2Cash</span></h3>
      </div>

      <form className='l-form' onSubmit={handleReset}>
        <p className='l-header'>Reset Password</p>
        <label>New Password</label>
        <input type={'password'} placeholder={'Enter new password'} name={'password'} onChange={handlePasswordInput} value={password.password || ''} pattern={'/^[a-zA-Z]{3,}$/'} required/>

        <label className='cp-login'>Confirm Password</label>
        <input type={'password'} placeholder={'Confirm password'} className='cp-btn' name={'confirmPassword'} onChange={handlePasswordInput} value={password.confirmPassword || ''}  required/>

        <Button text={'Reset Password'} radius={0} clickHandle={handleReset}/>
      </form>
    </Container>
    </Bg>
  )
}

export default ResetPassword