import { FC } from "react";
import cls from './MyMenu.module.scss'
import { classNames } from "shared/lib/classNames";
import { Menu } from "antd";

interface MyMenuProps {
    className?: string
}

export const MyMenu: FC<MyMenuProps> = ({className}) => {

    return(
        <div
        className={classNames(cls.MyMenu, {}, [className])}
        >
            <Menu/>
        </div>
    )
}