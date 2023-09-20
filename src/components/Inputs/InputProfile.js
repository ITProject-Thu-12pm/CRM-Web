import React from "react";
import './InputStyles.css';

function InputFormProfile({ inputTitle, inputContent, inputType, setInputContent, isEditing }) {

    const handleChange = (e) => {
        if (setInputContent) {
            setInputContent(e.target.value);
        }
    };

    const isReadOnly = inputTitle === "Email" ? true : !isEditing;

    return (
        <div className="mb-3">
            <label className="form-label">{inputTitle}</label>
            <input
                type={inputType}
                className="form-control input-profile"
                value={inputContent}
                onChange={handleChange}
                readOnly={isReadOnly}
            />
        </div>
    );
}

export default InputFormProfile;
