import type { FC } from 'react'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

export const LangSwitcher: FC = () => {
    var {
        t,
        i18n: { language, changeLanguage },
    } = useTranslation()

    var toggleLanguage = () =>
        changeLanguage(language === 'ru' ? 'en' : 'ru')

    return (
        <Button onClick={() => toggleLanguage()}>{t('lang')}</Button>
    )
}
