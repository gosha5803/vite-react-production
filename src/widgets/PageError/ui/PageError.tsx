import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import cls from './PageError.module.scss'

export var PageError: FC = () => {
    var { t } = useTranslation()

    var onReload = () => location.reload()

    return (
        <div className={cls.PageError}>
            <h1>{t('unexpectedError')}</h1>
            <Button onClick={onReload} type='primary'>
                {t('tryAgain')}
            </Button>
        </div>
    )
}
