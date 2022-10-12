import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';
import { Button } from '../Button/Button';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '400px'
    }
};

Modal.setAppElement('#root');

export const ModalUtil = ({ form: Form, handleChange, toggleModal, setToggleModal, handleUpload }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [fileChosen, setFileChosen] = useState(false);

    function openModal(e) {
        e.preventDefault();
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
        setToggleModal(false);
    }


    useEffect(() => {
        if (toggleModal) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [toggleModal])

    return (
        <div>
            <div className="change-avatar" onClick={openModal}>Change avatar</div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div id="myModal" className="modal-box">
                    <div className="modal-content">

                        <span onClick={closeModal} className="close">×</span>
                        <Form setFileChosen={setFileChosen} handleChange={handleChange} id="image-upload" type="file" label="Upload avatar" name="file" />
                        {!fileChosen && <span className="text-center">Supported: JPEG, PNG </span>}
                        {fileChosen && <Button clickFunction={handleUpload} text="Save" />}

                    </div>
                </div>

            </Modal>
        </div>
    );
}