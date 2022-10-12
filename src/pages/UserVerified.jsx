import React, { useState, useEffect } from 'react'
import { Bg, Container } from '../styles/EmailVerification'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import Button from '../components/Button'
import { toast, ToastContainer } from 'react-toastify'
import { useParams, useNavigate } from 'react-router-dom';
import 'react-toastify/ReactToastify.css'
import { mainAxios } from '../components/Axios/Axios'

const UserVerified = ({ content }) => {
  const userEmail = JSON.parse(localStorage.getItem('userEmail'))

  const navigate = useNavigate()

  const [verifiedUser, setVerifiedUser] = useState(false);

  const { token } = useParams();

  useEffect(() => {

    const verify = async () => {
      try {
        const res = await mainAxios.get(`users/verify/${token}`);

        if (res.data.status === 1) {
          setVerifiedUser(true)
        } else {
          setVerifiedUser(false)
        }

      } catch (err) {
        throw err
      }
    }
    verify()
  }, [])

  const handleCancel = () => {
    navigate('/login')
  }

  return (
    <Bg>
      {/* <ToastContainer /> */}
      <Container>
        <MdOutlineMarkEmailRead size={'100px'} color={'#03435F'} />
        {
          content === "verify" &&
          <>
            <p className='v-header'>Successfully Verified</p>
            <p className='v-message'>You have successfully verfied your email</p>
          </>
        }
        {
          content === "register" &&
          <>
            <p className='v-header'>Successfully Registered</p>
            <p className='v-message'>Please check your email for verification</p>
          </>
        }

        <Button text={'Back to Login'} radius={0} clickHandle={handleCancel} />

      </Container>
    </Bg>
  )
}

export default UserVerified