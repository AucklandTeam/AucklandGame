import React, { FC, ReactNode, useCallback, useLayoutEffect } from 'react'
import styles from 'styles/base.scss'
import BottomMenuItem from 'components/bottomMenuItem'
import { useAuth } from 'pages/Auth/selectors'
import history from 'src/core/history'
import { RouterPath } from 'shared/consts'
import { useAppDispatch } from 'src/client/App'
import { logout } from 'pages/Auth/actions'

type TemplatePageProps = {
	titlePage?: string
	children: ReactNode
}

const bottomMenuItems = [
	{ icon: styles.asRocket, url: '/game', name: 'Return to Game' },
	{ icon: styles.asTrophy, url: '/scores', name: 'High-Scores' },
	{ icon: styles.asPerson, url: '/profile', name: 'View Profile' },
	{ icon: styles.asEdit, url: '/settings', name: 'Edit Profile' },
	{ icon: styles.asForum, url: '/forum', name: 'Forum' },
	{ icon: styles.asPower, url: '/', name: 'Quit' }
]

const NotGameWrap: FC<TemplatePageProps> = ({ titlePage, children }) => {
	const dispatch = useAppDispatch()
	const logoutHandler = useCallback(() => {
		dispatch(logout())
	}, [])
	const { isAuth, isLoaded } = useAuth()

	useLayoutEffect(() => {
		if (!isAuth && isLoaded) {
			history.push(RouterPath.SignIn)
		}
	}, [isAuth])

	return (
		<div className={styles.notGame}>
			<div className={styles.contentWrap}>
				<h3>{titlePage}</h3>
				{children}
				<div className={styles.bottomMenuWrap}>
					{bottomMenuItems.map(({ name, url, icon }) => (
						<BottomMenuItem
							key={url}
							icon={icon}
							title={name}
							url={url}
							handler={url === '/' ? logoutHandler : undefined}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default NotGameWrap
