import React from 'react'
import styles from 'client/styles/base.scss'
import { Link } from 'react-router-dom'
import HomePageWrap from 'client/components/homePageWrap'
import { menuItems } from './shared'
import { useAuth } from 'src/core/ducks/auth/selectors'
import {PageMeta} from 'components/pageMeta';

const Main = () => {
	const { isAuth } = useAuth()

	return (
		<HomePageWrap>
			<PageMeta
				title='Destroy Asteroids'
				description='Game by Auckland Team on Yandex Practicum'
			/>
			<ul>
				{menuItems
					.filter(item => (isAuth ? item.url !== 'sign-in' : item))
					.map(item => {
						return (
							<li key={item.url} className={styles.menuItem}>
								<Link to={item.url}>{item.name}</Link>
							</li>
						)
					})}
			</ul>
		</HomePageWrap>
	)
}

export default Main
