import React, { FC, ReactNode } from 'react'
import css from 'styles/base.scss'
import { useTranslation } from 'react-i18next'
import LangSwitcher from 'components/langSwitcher'
import Player from 'components/bgSoundButton'
import fonSoundFile from 'static/sounds/fon.wav'

type HomePageWrapProps = {
    titlePage?: string
    titleContent?: string
    children: ReactNode
}

const HomePageWrap: FC<HomePageWrapProps> = ({ children, titleContent }) => {
    const { t } = useTranslation()
    return (
        <div className={css.notGame}>
            <h1>{t('gameTitle')}</h1>
            <Player url={fonSoundFile} />
            <LangSwitcher />
            <main className={css.w100}>
                <div className={css.contentWrapCenter}>
                    {titleContent && (
                        <div className={css.contentWrapTitle}>
                            <h3>{titleContent}</h3>
                        </div>
                    )}
                    {children}
                </div>
            </main>
        </div>
    )
}

export default HomePageWrap
