import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { VscPassFilled } from 'react-icons/vsc'
import { Bg, Container } from '../styles/MessageAlertModal'
import icon from '../assets/images/Successfully_Done.png'
import { useRecoilState } from 'recoil'
import { viewAccountRecord } from '../atoms/manageAccountStates'

const MessageAlertModal = ({showModal, setShowModal}) => {
    const [viewAccount, setViewAccount] = useRecoilState(viewAccountRecord);
    const modalRef = useRef()
    
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = () => {
        setViewAccount(true)
        setShowModal((prev) => !prev)
    }

    const close = (e) => {
        if(modalRef.current === e.target) {
            setShowModal((prev) => !prev)
        }
    }

  return (
      <>
        { showModal &&
            <Bg ref={modalRef} onClick={close}>
                {/* <animated.div style={animation}> */}
                    <Container>
                        {/* <VscPassFilled size={100} fill={'#80EA74'} /> */}
                        <img src={icon} alt='account-successfully-added-icon'/>

                        <h4>Bank Account Successful</h4>
                        <h5>Your bank account has been added successfully.</h5>
                        <button onClick={closeModal}>Done</button>
                    </Container> 
                {/* </animated.div>  */}
            </Bg>
        }
    </>
  )
}

export default MessageAlertModal