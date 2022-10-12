import React from 'react'

function DashboardHeader() {
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
                            N21,350.00
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