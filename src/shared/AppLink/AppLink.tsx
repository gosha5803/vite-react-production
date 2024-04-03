import { FC } from "react";
import cls from './AppLink.module.scss'
import { classNames } from "shared/lib/classNames";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({className, children, theme, to, ...other}) => {

    return(
        <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...other}
        >
            {children}
        </Link>
    )
}