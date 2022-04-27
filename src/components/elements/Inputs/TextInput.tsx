import React, { ChangeEvent, FC } from 'react';
import styles from './Inputs.scss';

export interface TextInputProps<NAME> {
    title?: string;
    name: NAME;
    type: HTMLInputElement['type'];
    value?: string;
    placeholder?: string;
    isHide?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps<string>> = ({ title, type, name, value, onChange }) => (
    <div className={styles.inputWrap}>
        <input
            type={type}
            name={name}
            title={title}
            value={value}
            onChange={onChange}
            required
        />
        <label htmlFor={name}>{title}</label>
    </div>
);

export default TextInput;
