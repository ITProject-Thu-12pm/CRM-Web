import React, { useState } from "react";
import './InputStyles.css';

const InputForm = ({ inputTitle, inputType, value, onChange, error }) => {
    return (
        <div className="mb-3 form-floating ">
           
            <input
                type={inputType}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                id="floatingInput"
               placeholder="www"
                autocomplete="off"
                value={value}
                onChange={onChange}
            />
               <label htmlFor="floatingInput">{inputTitle}</label>
            {error && <div className="invalid-feedback">
                {error}
            </div>}
        </div>
    );
};
  

export default InputForm;
