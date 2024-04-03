import { FC } from "react";
import cls from './Navbar.module.scss'
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/AppLink/AppLink";
import { PublicAppRoutes } from "shared/config/RouterConfig/ui/PublicRouterConfig";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return(
        <div
        className={classNames(cls.navbar, {}, [className])}
        >
            <div
            className={classNames(cls.links)}
            >
                <AppLink theme={AppLinkTheme.PRIMARY} to={PublicAppRoutes.MAIN} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={PublicAppRoutes.ABOUT}>О проекте</AppLink>
            </div>
        </div>
    )
}