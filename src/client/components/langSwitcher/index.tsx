import { useTranslation } from 'react-i18next'
import styles from 'styles/base.scss'
import { useState } from 'react'
import Button from 'components/buttons'

const LangSwitcher = () => {
    const { i18n } = useTranslation()
    const [currLang, setCurrentLang] = useState(i18n.resolvedLanguage)

    const changeLang = () => {
        const newLang = currLang === 'en' ? 'ru' : 'en'
        setCurrentLang(newLang)
        return i18n.changeLanguage(newLang)
    }

    return (
        <Button
            buttonClass={styles.visible}
            buttonType={'button'}
            buttonName={'language'}
            handleClick={changeLang}
            buttonTitle={currLang === 'en' ? 'EN' : 'РУ'}
        />
    )
}

export default LangSwitcher
