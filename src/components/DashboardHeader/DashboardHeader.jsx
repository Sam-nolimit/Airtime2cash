import React, { useState, useEffect } from 'react'
import { mainAxios } from '../Axios/Axios';

function DashboardHeader() {

    const [balance, setBalance] = useState(0);

    const getBalance = async () => {

        try {
            const res = await mainAxios.get(`/users/balance/` + localStorage.getItem("id"));
            setBalance(res.data.balance)
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        getBalance();
    }, [])

    return (
        <>
            <div className="mx-auto dashboard-heading-text">
                Dashboard
            </div>
            <div className="wallet-section col-12">
                <div className="wallet-card">
                    <div className="wallet-details">
                        <div className="wallet-balance">
                            Wallet balance
                        </div>
                        <div className="wallet-balance-amount">
                            N{balance.toLocaleString()}
                        </div>
                    </div>
                    <div className="account-status">
                        <div className="account-is-active">
                            Account is active
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHeader