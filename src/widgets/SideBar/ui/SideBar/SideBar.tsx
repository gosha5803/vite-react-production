import { FC, useState } from "react";
import cls from './SideBar.module.scss'
import { classNames } from "shared/lib/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = ({className}) => {
    const [isColapsed, setIsCollapsed] = useState<boolean>(false)

    const toggleCollapse = () => {
        setIsCollapsed((prev) => !prev)
    }

    return(
        <div
        className={classNames(cls.SideBar, {[cls.collapsed]: isColapsed}, [className])}
        >
            <button
            onClick={toggleCollapse}
            >
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher
                className={cls['ThemeSwitcher']}
                />
            </div>
        </div>
    )
}