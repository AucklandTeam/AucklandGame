import React, { FC } from 'react';
import styles from './Inputs.scss';

interface InputProps {
    inputTitle?: string;
    inputType: string;
    inputName: string;
    placeholder?: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const classes = `${styles.inputWrap}`;

const TextInput: FC<InputProps> = ({ inputTitle, inputType, inputName, placeholder }) => {
    return (
        <div className={classes}>
            <input
                type={inputType}
                name={inputName}
                required={true}
                placeholder={placeholder}
            />
            <label htmlFor={inputName}>{inputTitle}</label>
        </div>
    );
};

export default TextInput;
