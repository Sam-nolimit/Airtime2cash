import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import { Withdrawal, WithdrawalWrapper } from './WithdrawalHistoryStyled';

import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(englishStrings)

function WithdrawalHistory() {
  const [withdrawal, setWithdrawal] = useState([])

  const token = localStorage.getItem('token')

  const fetchBankRecord = async () => {
    const response = await axios.get(`/withdrawal/getUserWithdrawal`, {
      headers: {
        contenType: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (response.status === 200) {
      setWithdrawal(response.data.withdrawals.rows)
    }
  }

  useEffect(() => {
    fetchBankRecord()
  }, [])

  // useEffect(() => {
  //   fetchBankRecord()
  // }, [withdrawal])

  const regex = /([0-9]{4}-[0-9]{2}-[0-9]{2})?.([:0-9]+)/;

  return (
    <WithdrawalWrapper>
      { withdrawal.length > 0 ?
        withdrawal.map((withdraw) => (
          <div key={withdraw.id}>
            <Withdrawal>
              <div>
                {/* <p><b>Today,</b>{}</p>  */}
                <b><TimeAgo date={`${withdraw.updatedAt.match(regex)}`} formatter={formatter} /></b>
                <p>Withdraw Fund</p>
                <p>{withdraw.updatedAt.split('T')[0]}</p>
              </div>

              <div className='status'>
                <label>{withdraw.status === false ? (<p className='label-red'>Failed</p>) : (<p className='label-green'>Success</p>)}</label>
                <p>{Number(withdraw.amount).toLocaleString('en-US')}</p>
              </div>
            </Withdrawal>
          </div>
        )) : <p style={{color:'gray'}}> No withdrawal record available 😒 </p>
      } 
    </WithdrawalWrapper>
  )
}

export default WithdrawalHistory;