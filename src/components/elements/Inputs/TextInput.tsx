import React, {FC} from 'react';
import './Inputs.scss';

interface InputProps {
    inputTitle: string;
    inputType: string;
    inputName: string;
    onFocus?:  React.FocusEventHandler<HTMLInputElement>;
    onBlur?:  React.FocusEventHandler<HTMLInputElement>;
}

// предполагается анимация label на onFocus (в стилях предусмотрен класс .focused)

const TextInput:FC<InputProps> = ({ inputTitle, inputType, inputName }) => {
    return <div className={ 'input-wrap' }>
        <label>{ inputTitle }</label>
        <input type={ inputType } name={ inputName } />
        </div>;
};

export default TextInput;
