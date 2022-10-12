import "./Dashboard.css";
import { useState } from "react";
import BackArrow from "../../assets/icon/BackArrow.svg";
import "react-toastify/dist/ReactToastify.css";
import { NavBarDashboard } from "../NavBarDashboard/NavBarDashboard";
import React from "react";
import ManageAccount from "../../pages/ManageAccount";

import "bootstrap/dist/css/bootstrap.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { viewAccountRecord } from "../../atoms/manageAccountStates";
import { useRecoilState } from "recoil";
import TransferAirtime from "../TransferAirtime/TransferAirtime";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import WithdrawAct from "../WithdrawalBoard/WithdrawAct";
import WithdrawalHistory from "../WithdrawalHistory/WithdrawalHistory";

const Dashboard = () => {
  const [viewAccount, setViewAccount] = useRecoilState(viewAccountRecord);

  const userDetails = {
    firstname: localStorage.getItem("firstname"),
    lastname: localStorage.getItem("lastname"),
    phoneNumber: localStorage.getItem("phoneNumber"),
    username: localStorage.getItem("username"),
    id: localStorage.getItem("id"),
    avatar: localStorage.getItem("avatar"),
  };

  const [key, setKey] = useState("transfer-airtime");

  const handleGoBack = (e) => {
    e.preventDefault();
    setViewAccount(false);
  };

  const handleOptions = (k) => {
    setViewAccount(false);
    setKey(k);
  };

  return (
    <>
     
      <NavBarDashboard
        className="container-fluid"
        uploadUrl={userDetails.avatar}
        firstname={userDetails.firstname}
      />
      <div className="dashboard container-fluid p-0">
        <div className="container-fluid backdrop d-none d-md-block"></div>
        <div className="row dashboard-card mt-3">
          <div className="col-md-7 col-lg-5 dashboard-card-padding p-md-5">
            <div className="dashboard-box col-12">
              {(key === "transfer-airtime" || key === "withdraw-balance") && (
                <DashboardHeader />
              )}
              {key === "manage-bank-account" && (
                <>
                  <div className="heading-with-arrow container">
                    {viewAccount && (
                      <img
                        className="float-start"
                        src={BackArrow}
                        onClick={handleGoBack}
                        alt={"Arrow back icon"}
                      />
                    )}

                    <div className="mx-auto dashboard-heading-text">
                      Manage Account
                    </div>
                  </div>
                </>
              )}
              {key === "transaction-history" && (
                <div className="mx-auto dashboard-heading-text">
                  Transactions
                </div>
              )}

              <Tabs
                defaultActiveKey="transfer-airtime"
                id="dashboard-tabs"
                className="mb-3"
                activeKey={key}
                onSelect={(k) => handleOptions(k)}
                fill
              >
                <Tab eventKey="transfer-airtime" title="Transfer airtime">
                  <TransferAirtime />
                </Tab>
                <Tab eventKey="withdraw-balance" title="Withdraw balance">
                  <WithdrawAct setKey={key} />
                </Tab>
                <Tab eventKey="manage-bank-account" title="Manage bank account">
                  <ManageAccount />
                </Tab>
                <Tab eventKey="transaction-history" title="Transaction history">
                  <TransactionHistory />
                </Tab>
                <Tab eventKey="withdrawal-history" title="Withdrawal History">
                  <WithdrawalHistory />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
