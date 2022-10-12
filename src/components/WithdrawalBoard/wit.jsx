import './WithdrawalBoard'
import './WithdrawalBoard'
// import axios from "axios";
import { Nav, PinkDiv, FormBox, NavLogo, Frame85, Frame859, Eclipse, ProfName, Frame8698, WalletB, AccountB, ActiveAct, InputStyle,  StyledForm, WalDash } from './WithdrawalBoard';
import Logo from './images/Logo.svg'
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import Form from 'react-bootstrap/Form';




export const WithdrawalBoard = ({ ...props }) => {

  const accounts = ["Fixed deposit account", "Current account", "Joint account", "Corporate account", "Domiciliary account"];

  const validationSchema = Yup.object({
    account: Yup.string().required("Please select a account").oneOf(accounts),
    account_name: Yup.string().required(),
    account_number: Yup.string().min(11).max(11).required(),
    amount: Yup.string().required(),
    password: Yup.string().required(),
  });

  const initialValues = {
    account: "",
    account_name: "",
    account_number: "",
    amount: "",
    password: ""
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };


  const accountOptions = accounts.map((account, key) => (
    <option value={account} key={key}>
      {account}
    </option>
  ));


  const renderError = (message) => <p className="danger" style={{color: 'red'}}>{message}</p>;

  return (
    <>
      {/* <Nav><div>
        <NavLogo><img src={Logo} alt='logo'></img></NavLogo>

        <Frame85><div>
          <Frame859>
            <Eclipse><div></div></Eclipse>
            <ProfName>Tunde</ProfName>
          </Frame859>
        </div>
        </Frame85>
      </div>
      </Nav> */}

      {/* <PinkDiv> <div></div></PinkDiv> */}
      <FormBox> 
        
             {/* <WalDash>
                  
                  <Frame8698>
                    <WalletB>Wallet balance</WalletB>
                    <AccountB>N21,350.00</AccountB>
                      <ActiveAct>Account is active</ActiveAct>
                  </Frame8698>
             
           </WalDash> */}


      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
       <StyledForm>
      <Form>
        <div
          className="container"
          style={{
            width: "60%",
          }}
        >
           <InputStyle>
            <label className="label" htmlFor="product">
              select account
            </label>
            <div className="control">
            <InputStyle>
            <Field name="account" as="select" className="select input">
                <option value={""}>Select an account</option>
                {accountOptions}
              </Field>
              </InputStyle>
              <ErrorMessage name="account" render={renderError} />
            </div>
            </InputStyle>

          <InputStyle>
            <label className="label" htmlFor="name">
              Account Name
            </label>
            <div className="control">
              <Field
                name="account_name"
                type="text"
                className="input"
                placeholder="Account name"
              />
              <ErrorMessage name="account_name" render={renderError} />
            </div>
            </InputStyle>

          <InputStyle>
         
            <label className="label" htmlFor="name">
              Account Number
            </label>
           
              <Field
                name="account_number"
                type="number"
                className="input"
                placeholder="Account number"
              />
              <ErrorMessage name="account_number" render={renderError} />
        
            </InputStyle>
         

          <InputStyle>
        
            <label className="label" htmlFor="name">
              Amount
            </label>
            <div className="control">
              <Field
                name="amount"
                type="number"
                className="input"
                placeholder="Amount"
              />
              <ErrorMessage name="amount" render={renderError} />
            </div>
            </InputStyle>

            <InputStyle>
            <label className="label" htmlFor="name">
              Password
            </label>
            <div className="control">
              <Field
                name="password"
                type="number"
                className="input"
                placeholder="Password"
              />
              <ErrorMessage name="password" render={renderError} />
            </div>
            </InputStyle>
          
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </Form>
      </StyledForm>
    </Formik>

      </FormBox>
      
    </>
  )

}