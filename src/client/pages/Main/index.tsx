import React from 'react'
import styles from 'client/styles/base.scss'
import { Link } from 'react-router-dom'
import HomePageWrap from 'client/components/homePageWrap'
import { menuItems } from './shared'
import { useAuth } from 'src/core/ducks/auth/selectors'
import { PageMeta } from 'components/pageMeta'

const Main = () => {
	const { isAuth } = useAuth()
	return (
		<HomePageWrap>
			<PageMeta
				title='{str.gameName}'
				description='Game by Auckland Team on Yandex Practicum'
			/>
			<ul>
				{isAuth
					? menuItems
							.filter(item => item.url !== 'sign-in')
							.map(item => {
								return (
									<li
										key={item.url}
										className={styles.menuItem}
									>
										<Link to={item.url}>{item.name}</Link>
									</li>
								)
							})
					: menuItems
							.filter(item => item.access === 'public')
							.map(item => {
								return (
									<li
										key={item.url}
										className={styles.menuItem}
									>
										<Link to={item.url}>{item.name}</Link>
									</li>
								)
							})}
			</ul>
		</HomePageWrap>
	)
}

export default Main
