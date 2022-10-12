import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { Bg, Container, Form } from "../styles/ManageAccount";
import MessageAlertModal from "../components/MessageAlertModal";
import BankAccountList from "./BankAccountList";
import SelectInput from "../components/SelectInput";
import { showSuccessModal, viewAccountRecord } from "../atoms/manageAccountStates";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useRecoilState } from "recoil";
import { buttonDisplay } from '../atoms/manageAccountStates'
import axios from "../api/axios";


const ManageAccount = () => {
    const [inputs, setInputs] = useState({});
    const [viewAccount, setViewAccount] = useRecoilState(viewAccountRecord);
    const [showModal, setShowModal] = useRecoilState(showSuccessModal);
    const [btnDisplay, setBtnDisplay] = useRecoilState(buttonDisplay)
    const [bankList, setBankList] = useState([])
    const token = localStorage.getItem('token')

    const getBankLists = async () => {
      const response = await fetch('https://api.paystack.co/bank');
      const data = await response.json();
      setBankList(data.data);
    }

    const handleInput = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSelect = (e) => {
      setInputs({ ...inputs, bankName: e.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault()
      e.stopPropagation()

      try {
          const response = await axios.post(`/account/create`, inputs, {
            headers: {
              contenType: 'application/json',
              Authorization: `Bearer ${token}`
            }
          })
          
          if (response.status === 201) {
            toast.success(response.data.message);
            setInputs({ bankName: '', accountName: '', accountNumber: '' })
            openModal()
          } 
      } catch (e) {
        toast.error(e.response.data.message);
      }
    }

    const openModal = () => {
      setShowModal(true);
    };

    const handleView = (e) => {
        e.preventDefault();
        setViewAccount(true);
    };

    useEffect(() => {
      getBankLists()
    }, [])

    useEffect(() => {
      if(!inputs.bankName || (!inputs.accountName || inputs.accountName === '') || (!inputs.accountNumber || inputs.accountNumber === '')){
        setBtnDisplay(true)
      }else{
        setBtnDisplay(false)
      }
    },[inputs])

  return (
    <>
      {/* <ToastContainer /> */}
      {!viewAccount ? (
        <Bg>
          <Container>
            <Form>
              <div className="acount-headers">
                <h3>Bank Account</h3>
                <h4 onClick={handleView}>View Bank accounts</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <SelectInput selectionList={bankList} selectionDefault={"Select Bank"} onChangeAction={handleSelect} label={"Bank Name"} required />
                <InputField label={"Account Name"} placeholder={"Account name"} name={"accountName"} value={inputs.accountName || ""} changeHandle={handleInput} required />
                <InputField label={"Account Number"} placeholder={"Account number"} name={"accountNumber"} value={inputs.accountNumber || ""} changeHandle={handleInput} required />

                <Button text={"Add Bank"} radius={0} width={198} clickHandle={handleSubmit} btnState={btnDisplay}/>
              </form>
            </Form>
            {
                showModal && ( <MessageAlertModal showModal={showModal} setShowModal={setShowModal} />)
            }
          </Container>
        </Bg>
      ) : (
        <BankAccountList />
      )}
    </>
  );
};

export default ManageAccount;
