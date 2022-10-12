import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Input from '../Input/Input';
import ReadOnly from '../Input/ReadOnly';
import Button2 from '../../Button'

const ModalBS = ({ amountSent, amountToReceive, showModal, setShowModal }) => {
    // const [show, setShow] = useState(false);

    const handleClose = () => setShowModal(false);
    // const handleShow = () => setShowModal(true);
    const [transactionData, setTransactionData] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target
        setTransactionData({ ...transactionData, [name]: value })
        console.log(transactionData);

    }

   

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="mx-auto table-modal-title">Enter an amount</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">         
                           <div className="">
                                <Input childDefaultValue={amountSent} handleChange={handleChange} name="amount-sent" type="text" childClass="input" label="Amount sent" />
                            </div>
                        </Form.Group>
                        <Form.Group>
                             <div className="">
                             <ReadOnly childDefaultValue={amountToReceive} handleChange={handleChange} name="amount-to-receive" type="text" childClass="input" label="Amount to receive" />
                         </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="table-modal-footer">
                    <Button2 text={"Confirm"} />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBS