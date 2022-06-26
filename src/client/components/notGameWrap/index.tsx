import React, { FC, ReactNode, useCallback, useEffect } from 'react'
import styles from 'styles/base.scss'
import BottomMenuItem from 'components/bottomMenuItem'
import { useAuth } from 'src/core/ducks/auth/selectors'
import { logout } from 'src/core/ducks/auth/actions'
import { useAppDispatch } from 'src/ssr'
import classNames from "src/utils/classNames";
import history from 'src/core/history'
import LangSwitcher from 'components/langSwitcher'
import {RouterPath} from 'shared/consts'

type TemplatePageProps = {
	titlePage?: string
	designForForum?: boolean;
	children: ReactNode
}

const bottomMenuItems = [
	{ icon: styles.asRocket, url: '/game', name: 'returnToGame' },
	{ icon: styles.asTrophy, url: '/scores', name: 'highScores' },
	{ icon: styles.asPerson, url: '/profile', name: 'profile' },
	{ icon: styles.asEdit, url: '/settings', name: 'profileEdit' },
	{ icon: styles.asForum, url: '/forum', name: 'forum' },
	{ icon: styles.asPower, url: '/', name: 'quit' }
]

const NotGameWrap: FC<TemplatePageProps> = ({ designForForum = false, titlePage, children }) => {
	const dispatch = useAppDispatch()
	const logoutHandler = useCallback(() => {
		dispatch(logout())
	}, [])
	const { isAuth, isLoaded } = useAuth()

	useEffect(() => {
	if (!isAuth && isLoaded) {
	 		history.push(RouterPath.Main)
	 	}
	 }, [isAuth])

	return (
		<div className={styles.notGame}>
			<LangSwitcher />
			<div className={classNames(styles.contentWrap, {forum: designForForum})}>
				<h3>{titlePage}</h3>
				{children}
				<div className={classNames(styles.bottomMenuWrap, {forum: designForForum})}>
					{bottomMenuItems.map(({ name, url, icon }) => (
						<BottomMenuItem
							hideTitle={!designForForum}
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
