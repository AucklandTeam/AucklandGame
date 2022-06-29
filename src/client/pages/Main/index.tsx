import React from 'react'
import styles from 'styles/base.scss'
import { Link } from 'react-router-dom'
import HomePageWrap from 'client/components/homePageWrap'
import { useAuth } from 'src/core/ducks/auth/selectors'
import { PageMeta } from 'components/pageMeta'
import { useTranslation } from 'react-i18next'
import { MenuItems } from './types'

const Main = () => {
    const { isAuth } = useAuth()
    const { t } = useTranslation()
    const menuItems: MenuItems[] = [
        { url: 'game', name: t('startGame'), access: 'public' },
        { url: 'sign-in', name: t('signIn'), access: 'public' },
        { url: 'profile', name: t('profile'), access: 'private' },
        { url: 'scores', name: t('highScores'), access: 'private' },
        { url: 'forum', name: t('forum'), access: 'private' },
    ]
    return (
        <HomePageWrap>
            <PageMeta
                title={t('gameTitle')}
                description={t('gameDescription')}
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
