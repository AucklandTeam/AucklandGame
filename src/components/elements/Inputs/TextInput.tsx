import React, { FC } from 'react';
import styles from './Inputs.scss';

interface InputProps {
    inputTitle: string;
    inputType: string;
    inputName: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const classes = `${styles.inputWrap}`;

const TextInput: FC<InputProps> = ({ inputTitle, inputType, inputName, value, onChange }) => {
    return (
        <div className={classes}>
            <input type={inputType} name={inputName} required value={value} onChange={onChange}/>
            <label htmlFor={inputName}>{inputTitle}</label>
        </div>
    );
};

export default TextInput;
