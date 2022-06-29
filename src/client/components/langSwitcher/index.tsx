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
    const {i18n} = useTranslation();
    const [currLang, setCurrentLang] = useState(i18n.resolvedLanguage);

    const changeLang = () => {
        const newLang = currLang === 'en' ? 'ru' : 'en';
        setCurrentLang(newLang);
        return i18n.changeLanguage(newLang)
    };
    return (
        <div className={styles.langSwitch}>
            <Button
                buttonClass={styles.visible }
                buttonType={'button'}
                buttonName={'language'}
                handleClick={changeLang}
                buttonTitle={lngs[currLang].nativeName} />
        </div>
    );
}

export default LangSwitcher;
