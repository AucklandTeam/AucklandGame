import React from 'react';
import './Inputs.scss';

interface InputProps {
    inputTitle: string;
    inputType: string;
    inputName: string;
    onFocus:  React.FocusEventHandler<HTMLInputElement> | undefined;
    onBlur:  React.FocusEventHandler<HTMLInputElement> | undefined;
}

// предполагается анимация label на onFocus (в стилях предусмотрен класс .focused)

const TextInput:React.FC<InputProps> = ({ inputTitle, inputType, inputName }) => {
    return <div className={ 'input-wrap' }>
        <label>{ inputTitle }</label>
        <input type={ inputType } name={ inputName } />
        </div>;
};

export default TextInput;