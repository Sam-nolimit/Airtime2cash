import React, { useEffect, useState } from "react";
import "./FileUpload.css"

const FileUpload = ({ label, name, id, setFileChosen }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleDelete = () => {
        document.getElementById("image-upload").value = "";
        setSelectedImage(null);
        setFileChosen(false);
    }

    const handleChange = (e) => {
        setSelectedImage(e.target.files[0]);
        setFileChosen(true);
    }

    return (
        <div className="file-input">

            {selectedImage && (
                <div className="preview-wrapper">
                    <img alt="image" style={{ borderRadius: '10%', width: '80%', height: 'auto' }} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <a onClick={handleDelete}>Remove</a>
                </div>
            )}

            <label htmlFor="image-upload" className="input-label">
                {label}
            </label >
            <input className="select-inputs my-3"
                type="file"
                name={name}
                id={id}
                onChange={handleChange}
                accept="image/png, image/jpeg"
            />
        </div>
    );
};

export default FileUpload;