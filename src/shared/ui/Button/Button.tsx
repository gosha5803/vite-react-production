import { ButtonHTMLAttributes, FC } from "react";
import cls from './Button.module.scss'
import { classNames } from "shared/lib/classNames";

export enum ButtonTheme {
    TEXT = "text"
}

interface Icon {
    icon: React.ReactNode
    position: 'start' | 'end'
}

interface MyButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme: ButtonTheme,
    icon?: Icon
}

export const MyButton: FC<MyButtonProps> = ({className, theme, children, icon, ...otherProps}) => {
    return(
        <button
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
        >
            {icon?.position ==='start' &&   icon.icon}
            {children}
            {icon?.position ==='end' &&   icon.icon}
        </button>
    )
}