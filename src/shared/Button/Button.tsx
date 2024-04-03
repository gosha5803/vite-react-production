import { ButtonHTMLAttributes, FC } from "react";
import cls from './Button.module.scss'
import { classNames } from "shared/lib/classNames";

export enum ButtonTheme {
    TEXT = "text"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme: ButtonTheme
}

export const Button: FC<ButtonProps> = ({className, theme, children, ...otherProps}) => {
    return(
        <button
        {...otherProps}
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    )
}