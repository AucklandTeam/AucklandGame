import React from 'react';
import './Button.scss';

interface ButtonProps {
    buttonType: 'button' | 'submit' | 'reset' | undefined;
    buttonName: string;
    buttonTitle: string;
}

const Button:React.FC<ButtonProps> = ({ buttonType, buttonName, buttonTitle} ) => {
    return <button type={ buttonType } name={ buttonName } title={ buttonTitle }>{ buttonTitle }</button>;
};

export default Button;
