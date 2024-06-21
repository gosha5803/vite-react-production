import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import cls from './SideBar.module.scss'

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
    const [isColapsed, setIsCollapsed] = useState<boolean>(false)

    const toggleCollapse = () => {
        setIsCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(
                cls.SideBar,
                { [cls.collapsed]: isColapsed },
                [className]
            )}>
            <button onClick={toggleCollapse}>toggle</button>
            <div className={cls.switchers}>
                <LangSwitcher />
                <ThemeSwitcher className={cls['ThemeSwitcher']} />
            </div>
        </div>
    )
}
