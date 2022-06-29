import styles from 'styles/base.scss'
import React from 'react'
import ConfigArrowButton from './ConfigArrowButton'
import SpaceButtonIcon from '../Icons/SpaceButtonIcon'
import { useTranslation } from 'react-i18next'

const StartModal = ({ startGameHandler, attempts, score }: any) => {
    const { t } = useTranslation()
    const isNewGame = attempts === 0
    const startButtonText = isNewGame ? t('modal.start') : t('modal.tryAgain')
    return (
        <div className={styles.modalStartWrapper}>
            <div className={styles.modalStart}>
                {!isNewGame && (
                    <div className={styles.modalScore}>
                        <div>{t('modal.gameOver')}</div>
                        <div>
                            {t('score')}: {score}
                        </div>
                    </div>
                )}
                <div
                    className={styles.configTitle}
                    style={{ cursor: 'pointer' }}
                    onClick={startGameHandler}
                >
                    {startButtonText}
                </div>
                {isNewGame && (
                    <div className={styles.buttonsConfig}>
                        <div className={styles.configTitle}>
                            <ConfigArrowButton deg={180} />
                            <ConfigArrowButton
                                deg={90}
                                margin={100}
                            />
                            <ConfigArrowButton
                                deg={270}
                                margin={-100}
                                marginLeft={-50}
                            />
                            <ConfigArrowButton deg={0} />
                        </div>
                        <div>{t('modal.move')}</div>
                        <SpaceButtonIcon />
                        <div>{t('modal.shoot')}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StartModal
