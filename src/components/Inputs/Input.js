import React from "react";
import './InputStyles.css';

const InputForm = ({ inputTitle, inputType, value, onChange }) => {
    return (
        <form>
            <div className="form-floating input-margin input-box-size input-font">
                <input
                    type={inputType}
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    autocomplete="off"
                    value={value}
                    onChange={onChange}
                />
                <label htmlFor="floatingInput">{inputTitle}</label>
            </div>
        </form>
    );
}

export default InputForm;