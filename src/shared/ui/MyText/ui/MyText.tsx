import { FC } from "react";
import cls from './MyText.module.scss'
import { classNames } from "shared/lib/classNames";

interface MyTextProps {
    className?: string
    children: React.ReactNode
}

export const MyText: FC<MyTextProps> = ({className, children}) => {

    return(
        <div
        className={classNames(cls.MyText, {}, [className])}
        >
            {children}
        </div>
    )
}