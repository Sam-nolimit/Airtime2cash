import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Input from '../Input/Input';
import ReadOnly from '../Input/ReadOnly';
import Button2 from '../../Button'
import { mainAxios } from '../../Axios/Axios';
import { toast } from 'react-toastify';

const ModalBS = ({ showModal, setShowModal, toConfirm, getTransactions, transactionId }) => {

    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const toastErrorMessage = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const handleConfirm = async () => {
        try {
            const res = await mainAxios.patch(`/users/credit`, {
                id: toConfirm.id,
                amount: toConfirm.amount
            });

            if (res.data.status === true) {

                const result = await mainAxios.patch(`/transactions`, {
                    id: transactionId,
                    status: 1 //success status
                });

                setTimeout(() => {
                    setShowModal(false)
                }, 1000)

                if (result.data.success) {
                    getTransactions()
                    toastSuccessMessage("Successfully updated transaction")
                }

            }
        } catch (err) {
            toastErrorMessage("Could not update transaction. Please try again later")
        }


    }

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
                                <Input childDefaultValue={Number((toConfirm.amount / 0.7).toFixed(2)).toLocaleString()} handleChange={handleChange} name="amount-sent" type="text" childClass="input" label="Amount sent" />
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <div className="">
                                <ReadOnly childDefaultValue={toConfirm.amount.toLocaleString()} handleChange={handleChange} name="amount-to-receive" type="text" childClass="input" label="Amount to receive" />
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="table-modal-footer">
                    <Button2 clickHandle={handleConfirm} text={"Confirm"} />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBS