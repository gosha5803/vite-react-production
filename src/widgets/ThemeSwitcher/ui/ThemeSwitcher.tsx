import { FC } from "react";
import cls from './ThemeSwitcher.module.scss'
import { classNames } from "shared/lib/classNames";
import { MyButton, ButtonTheme } from "shared/ui/Button/Button";
import { Theme, useTheme } from "app/providers/ThemeProviders";
import MoonIcon from 'app/assets/icons/moon.svg?react'
import SunIcon from 'app/assets/icons/sun.svg?react'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const { theme, toggleTheme } = useTheme()

    return(
        <MyButton
        theme={ButtonTheme.TEXT}
        onClick={toggleTheme}
        className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <MoonIcon/> : <SunIcon/>}
        </MyButton>
    )
}