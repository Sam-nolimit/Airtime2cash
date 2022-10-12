import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { Bg, Cards, Container, Form, Scroll } from '../styles/BankAccountList'
import { useRecoilState } from 'recoil';
import { bankID, viewAccountRecord } from '../atoms/manageAccountStates';
import { showSuccessModal } from '../atoms/manageAccountStates';
import axios from '../api/axios';
import DeleteAccountModal from '../components/DeleteAccountModal';

const BankAccountList = () => {
  const [viewAccount, setViewAccount] = useRecoilState(viewAccountRecord);
  const [showModal, setShowModal] = useRecoilState(showSuccessModal);
  const [bankAccountList, setBankAccountList] = useState([])
  const [deleteBank, setDeleteBank] = useRecoilState(bankID)

  const userID = localStorage.getItem('id')
  const token = localStorage.getItem('token')

  const fetchBankRecord = async () => {
    const response = await axios.get(`/account/getuseraccount/${userID}`, {
        headers: {
            contenType: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    if(response.status === 200) {
        const reverseBankList = [...response.data.data].reverse()
        return setBankAccountList(reverseBankList)
    }
  }

  const handleRefresh = async () => {
    // fetchBankRecord()
    setBankAccountList((bank) => bank.filter((val) => val.id !== deleteBank ))
  }

  const handleRemoveAccount = (value) => {
        setShowModal(true);
        setDeleteBank(value)
    }
    

  const handleNewBank = () => {
    setViewAccount(false)
  }

  useEffect(() => {
    fetchBankRecord()
  }, [])

  return (
    <>
        <Bg>
            <Container>
                <Form>
                    <div className='acount-headers'>
                        <h3>Bank Accounts</h3>
                    </div>
                    <Scroll>
                    { bankAccountList.length > 0 ?
                        bankAccountList.map((account) => (
                            <Cards key={account.id}>
                                <div className='account-record'>
                                    <div className='details'>
                                        <h5>{account.bankName}</h5>
                                        <h5>{account.accountNumber}</h5>
                                        <h5>{account.accountName}</h5>
                                    </div>
                                    <button onClick={() => {
                                        handleRemoveAccount(account.id)
                                    }}>Remove</button>
                                </div>
                            </Cards>
                        )) : ( <small className='no-record'> Oops! No account record found. 😢 </small>)
                    }
                    </Scroll>
                    <>
                        <Button text={'Add New Bank'} radius={0} width={198} clickHandle={handleNewBank}/>
                    </>
                </Form>
            </Container>
            {
                showModal && ( <DeleteAccountModal showModal={showModal} setShowModal={setShowModal} pgReload={handleRefresh}/>)
            }
        </Bg>
    </>
  )
}

export default BankAccountList