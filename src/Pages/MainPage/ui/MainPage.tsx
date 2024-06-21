import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { MainPageLayout } from 'widgets/Layouts/MainPageLayout/MainPageLayout'

const MainPage: FC = () => {
    const { t } = useTranslation('')

    return (
        <>
            {' '}
            <MainPageLayout>
                {t('aboutProject')}
                <h1>{t('mainPage')}</h1>
            </MainPageLayout>
        </>
    )
}

export default MainPage
