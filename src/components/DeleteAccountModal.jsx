import React, { useEffect, useRef } from 'react'
import { TiDelete } from 'react-icons/ti'
import { Bg, Container } from '../styles/DeleteAccountModal'
import icon from '../assets/images/Successfully_Done.png'
import { useRecoilState } from 'recoil'
import { bankID, viewAccountRecord } from '../atoms/manageAccountStates'
import axios from '../api/axios'

const DeleteAccountModal = ({showModal, setShowModal, pgReload}) => {
    const [viewAccount, setViewAccount] = useRecoilState(viewAccountRecord);
    const [deleteBank, setDeleteBank] = useRecoilState(bankID)

    const modalRef = useRef()

    const token = localStorage.getItem('token')

    const handleDelete = async () => {
        const response = await axios.delete(`/account/deleteaccount/${deleteBank}`, {
            headers: {
                contenType: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        if(response.status === 200){
            pgReload()
        }
        closeModal()
    }

    const handleCancel = () => {
        closeModal()
    }

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
                    <Container>
                        <TiDelete size={100} fill={'red'} />
                        <h4>Delete Account</h4>
                        <h5>Are you sure you want to delete ?</h5>
                        <div className='buttons'>
                            <button className='delete' onClick={handleDelete}>Delete</button>
                            <button className='cancel' onClick={handleCancel}>Cancel</button>
                        </div>
                    </Container>
            </Bg>
        }
    </>
  )
}

export default DeleteAccountModal