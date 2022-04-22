import React, {ChangeEvent, FC} from 'react';
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

const classes = `${styles.inputWrap}`;

const TextInput: FC<TextInputProps<string>> = ({title,type, name,value,onChange }) => {
    return (
        <div className={classes}>
            <input type={type} name={name} title={title} value={value} onChange={onChange} required/>
            <label htmlFor={name}>{title}</label>
        </div>
    );
};

export default TextInput;
