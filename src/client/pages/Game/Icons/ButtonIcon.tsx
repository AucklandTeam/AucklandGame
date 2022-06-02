import React from 'react'

const ButtonIcon = ({ deg, margin, marginLeft }: any) => (
	<svg
		style={{
			transformOrigin: 'center',
			transform: `rotate(${deg}deg)`,
			marginTop: margin,
			marginLeft
		}}
		width='48'
		height='48'
		viewBox='0 0 48 48'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<rect
			width='48'
			height='48'
			rx='2'
			fill='url(#paint0_linear_117_16317)'
		/>
		<path
			d='M28 14.688L26.1253 16.5627L32.2507 22.688H10.688V25.3133H32.2507L26.1253 
        31.4387L28 33.3133L37.312 24.0013L28 14.688Z'
			fill='#1C1D20'
			fillOpacity='0.75'
		/>
		<defs>
			<linearGradient
				id='paint0_linear_117_16317'
				x1='24.1778'
				y1='48'
				x2='0.937704'
				y2='29.7091'
				gradientUnits='userSpaceOnUse'
			>
				<stop stopColor='#EEEEEE' />
				<stop offset='1' stopColor='white' />
			</linearGradient>
		</defs>
	</svg>
)

export default ButtonIcon
