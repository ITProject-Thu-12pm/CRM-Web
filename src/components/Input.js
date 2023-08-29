import React from "react";
import './InputStyles.css';

const InputForm = ({ inputTitle }) => {
    return (
        <form className="input">
            <div className="form-floating input-margin">
                <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                />
                <label for="floatingInput">{inputTitle}</label>
            </div>
        </form>
    );
}

export default InputForm;