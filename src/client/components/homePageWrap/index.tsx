import React, { FC, ReactNode } from 'react'
import css from 'styles/base.scss'

type HomePageWrapProps = {
	titlePage?: string
	titleContent?: string
	children: ReactNode
}

const HomePageWrap: FC<HomePageWrapProps> = ({ children, titleContent }) => (
	<div className={css.notGame}>
		<h1>Destroy Asteroids</h1>
		<main className={css.w100}>
			<div className={css.contentWrapCenter}>
				{titleContent && (
					<div className={css.contentWrapTitle}>
						<h3>{titleContent}</h3>
					</div>
				)}
				{children}
			</div>
		</main>
	</div>
)

export default HomePageWrap
