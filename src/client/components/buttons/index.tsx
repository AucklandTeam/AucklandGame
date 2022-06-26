import React, { MouseEventHandler } from 'react'
import 'styles/base.scss'

interface ButtonProps {
	buttonType: 'button' | 'submit' | 'reset'
	buttonName?: string
	buttonTitle: string
	handleClick?: MouseEventHandler<HTMLButtonElement> | undefined
	buttonClass?: string
}

const Button: React.FC<ButtonProps> = ({
	buttonType,
	buttonName,
	buttonTitle,
	handleClick,
	buttonClass
}) => {
	return (
		<button
			type={buttonType}
			name={buttonName}
			title={buttonTitle}
			onClick={handleClick}
			className={buttonClass}
		>
			{buttonTitle}
		</button>
	)
}

export default Button
