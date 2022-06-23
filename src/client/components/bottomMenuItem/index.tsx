import React, { FC } from 'react'
import styles from 'styles/base.scss'
import { Link, useLocation, Location } from 'react-router-dom'
import {useTranslation} from 'react-i18next';

interface BottomMenuItemType {
	icon: string
	title: string
	url: string
	handler?: () => void
}

const isHidden = (loc: Location, url: string): string => {
	if (loc.pathname === url) {
		return `${styles.bottomMenuItem} ${styles.hidden}`
	} else {
		return `${styles.bottomMenuItem}`
	}
}

const BottomMenuItem: FC<BottomMenuItemType> = ({
	icon,
	title,
	url,
	handler
}) => {
	const location = useLocation()
	const {t} = useTranslation()
	return (
		<Link
			to={url}
			className={isHidden(location, url)}
			onClick={event => {
				if (handler) {
					event.preventDefault()
					handler()
				}
			}}
		>
			<i className={icon} />
			<span>{t(title)}</span>
		</Link>
	)
}

export default BottomMenuItem
