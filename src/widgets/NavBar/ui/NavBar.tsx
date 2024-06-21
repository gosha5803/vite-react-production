import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { PublicAppRoutes } from 'shared/config/RouterConfig/ui/PublicRouterConfig'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.mainLink}
                    to={PublicAppRoutes.MAIN}>
                    {t('main')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={PublicAppRoutes.ABOUT}>
                    {t('aboutUs')}
                </AppLink>
            </div>
        </div>
    )
}
