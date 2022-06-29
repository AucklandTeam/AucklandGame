import React, { FC } from 'react'
import styles from 'styles/base.scss'
import { Link, useLocation, Location } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'src/core/ducks/auth/selectors'
import { RouterPath } from 'shared/consts'

interface BottomMenuItemType {
    icon: string
    title: string
    url: string
    handler?: () => void
    hideTitle: boolean
}

const isHidden = (loc: Location, url: string): string => {
    if (loc.pathname === url) {
        return `${styles.bottomMenuItem} ${styles.hidden}`
    } else {
        return `${styles.bottomMenuItem}`
    }
}

const BottomMenuItem: FC<BottomMenuItemType> = ({ icon, title, url, handler, hideTitle }) => {
    const location = useLocation()
    const { t } = useTranslation()
    const { isAuth } = useAuth()

    return (
        <Link
            to={!isAuth && url !== '/' ? RouterPath.SignIn : url}
            className={isHidden(location, url)}
            onClick={event => {
                if (handler) {
                    event.preventDefault()
                    handler()
                }
            }}
        >
            <i className={icon} />
            {hideTitle && <span>{t(title)}</span>}
        </Link>
    )
}

export default BottomMenuItem
