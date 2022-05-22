import React from 'react'
import styles from 'client/styles/base.scss'
import { Link } from 'react-router-dom'
import HomePageWrap from 'client/components/homePageWrap'
import { menuItems } from './shared'

const Main = () => {
	//const {isAuth} = useAuth();
	return (
		<HomePageWrap>
			<ul>
				{menuItems
					//.filter((item) => isAuth ? item.url !== 'sign-in' : item)
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
