import React from 'react'
import { Link } from 'react-router-dom'
import { RouterPath } from 'shared/consts'
import styles from 'client/styles/base.scss'
import HomePageWrap from 'client/components/homePageWrap'
import {PageMeta} from 'components/pageMeta';

const Error500 = () => (
	<HomePageWrap>
		<PageMeta
			title='Server Error | Destroy Asteroids'
			description='Game by Auckland Team on Yandex Practicum'
		/>
		<h1>500</h1>
		<h4 className={styles.centered}>Don’t panic! We’ll fix it ASAP</h4>
		<Link to={RouterPath.Main}>Return to Main Menu</Link>
	</HomePageWrap>
)

export default Error500
