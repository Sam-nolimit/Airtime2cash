import React, { useState, useEffect } from "react";
import Button from "../Button";
import { Bg, Container, Form } from "../../styles/WithdrawAccount";
import SelectInput from "../SelectInput";
import InputField from "../InputField";
import { toast } from "react-toastify";
import InputFieldReadOnly from "../InputFieldReadOnly";
import { mainAxios } from "../Axios/Axios";


const WithdrawAct = ({ setKey }) => {
  const initialValues = { amount: "", password: "" }
  const [inputValues, setInputValues] = useState(initialValues);
  const [bankList, setBankList] = useState([])
  const [accName, setAccName] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const bankOptions = []


  const getBankLists = async () => {
    const userID = localStorage.getItem("id")
    const response = await mainAxios.get(`/account/getuseraccount/${userID}`);


    for (let i = 0; i < response.data.data.length; i++) {
      bankOptions[i] = { id: i, name: `${response.data.data[i].accountName} - ${response.data.data[i].bankName} - ${response.data.data[i].accountNumber}` }
    }
    setBankList([...bankOptions]);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSelectChange = (data) => {
    setAccName(data.value.split('-')[0].trim())
    setAccNumber(data.value.split('-')[2].trim())
  }

  useEffect(() => {
    getBankLists()
  }, [setKey])

  const handleErrorMessage = (msg) => {
    return toast.error(msg);
  };


  const handleErrorValidation = () => {
    if (

      inputValues.accName === "" ||
      inputValues.amount === "" ||
      inputValues.password === "") {
      handleErrorMessage("Field(s) can not be empty");
    } else if (!Number(inputValues.amount)) {
      handleErrorMessage("amount should be a number");
    }

  }

  const handleSubmit = (e) => {
    /***
     *Consume API here
     */
    handleErrorValidation()
  };


  return (
    <Bg>
      <Container>
        <Form>
          <div className="acount-headers">
            <h6>Withdraw</h6>
          </div>
          <form>
            <SelectInput
              selectionList={bankList.length > 0 ? bankList : [{}]}
              selectionDefault={"Select account"}
              onChangeAction={handleSelectChange}
              label={"Select Account"}
              value={""}
            />
            <InputFieldReadOnly
              label={"Account Name"}
              placeholder={"BabatundeOla"}
              name={"Account name"}
              value={accName}
            />
            <InputFieldReadOnly
              label={"Account Number"}
              placeholder={"2987665533"}
              name={"Account number"}
              value={accNumber}
            />
            <InputField
              label={"Amount"}
              placeholder={"NGN"}
              name={"amount"}
              value={inputValues.amount || ""}
              changeHandle={handleChange}
            />
            <InputField
              label={"Password"}
              placeholder={"password"}
              name={"password"}
              type={"password"}
              required
              value={inputValues.password || ""}
              changeHandle={handleChange}
            />
            <Button text={"Withdraw"} radius={0} clickHandle={handleSubmit} />
          </form>
        </Form>
      </Container>
    </Bg>
  );
};

export default WithdrawAct;
