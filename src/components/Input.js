import React from "react";
import './InputStyles.css';

const InputForm = ({ inputTitle, inputType }) => {
    return (
        <form>
            <div className="form-floating input-margin input-box-size input-font">
                <input
                    type={inputType}
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