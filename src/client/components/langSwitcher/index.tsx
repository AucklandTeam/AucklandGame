import {useTranslation} from 'react-i18next'
import styles from 'styles/base.scss'
import {useEffect, useState} from 'react';
import Button from 'components/buttons';

interface langTypes {
    en: Record<'nativeName', string>
    ru: Record<'nativeName', string>
}
const lngs: langTypes = {
    en: { nativeName: 'EN' },
    ru: { nativeName: 'РУ' }
}

const LangSwitcher = () => {
    const {i18n} = useTranslation()
    const [detectLang, setDetectLang] = useState('en')

    useEffect( () => setDetectLang(i18n.resolvedLanguage), [detectLang])

    return (
        <div className={styles.langSwitch}>
            {
                Object.keys(lngs).map(lng => (
                    <Button
                        key={lng}
                        buttonClass={ detectLang === lng ? styles.hidden : styles.visible }
                        buttonType={'button'}
                        buttonName={'language'}
                        handleClick={() => {
                            setDetectLang(i18n.resolvedLanguage)
                            return i18n.changeLanguage(lng)
                            }
                        }
                        buttonTitle={lngs[lng as keyof langTypes].nativeName} />
                ))
            }
        </div>

    )
}

export default LangSwitcher
