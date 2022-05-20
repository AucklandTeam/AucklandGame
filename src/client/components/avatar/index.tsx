import React, { FC, MouseEventHandler } from 'react'

interface AvatarProps {
	imageSrc: string
	divClass?: string
	imageTitle: string
	handleClick?: MouseEventHandler<HTMLDivElement> | undefined
}

const Avatar: FC<AvatarProps> = ({ imageSrc, divClass, imageTitle, handleClick }) => (
	<div className={divClass} onClick={handleClick}>
		<img src={imageSrc} title={imageTitle} alt={imageTitle} />
	</div>
)

export default Avatar
