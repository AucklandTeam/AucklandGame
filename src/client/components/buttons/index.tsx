import React, { MouseEventHandler } from 'react'
import 'styles/base.scss'

interface ButtonProps {
	buttonType: 'button' | 'submit' | 'reset'
	buttonName?: string
	buttonTitle: string
	handleClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const Button: React.FC<ButtonProps> = ({
	buttonType,
	buttonName,
	buttonTitle,
	handleClick
}) => {
	return (
		<button
			type={buttonType}
			name={buttonName}
			title={buttonTitle}
			onClick={handleClick}
		>
			{buttonTitle}
		</button>
	)
}

export default Button
