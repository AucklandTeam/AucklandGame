import React from 'react'
import { Link } from 'react-router-dom'
import { RouterPath } from 'shared/consts'
import styles from 'client/styles/base.scss'
import HomePageWrap from 'client/components/homePageWrap'
import {PageMeta} from 'components/pageMeta';

const Error404 = () => (
	<HomePageWrap>
		<PageMeta
			title='Page Not Found | Destroy Asteroids'
			description='Game by Auckland Team on Yandex Practicum'
		/>
		<h1>404</h1>
		<h4 className={styles.centered}>
			Oops! This page is lost in the void.
		</h4>
		<Link to={RouterPath.Main}>Return to Main Menu</Link>
	</HomePageWrap>
)

export default Error404
