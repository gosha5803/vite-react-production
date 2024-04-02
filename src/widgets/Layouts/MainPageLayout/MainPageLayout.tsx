import { FC } from "react";
import { ILayoutInterface } from "../../../shared/Interfaces/layout-interfaces";
import cls from './MainPageLayput.module.scss'

export const MainPageLayout: FC<ILayoutInterface> = ({children}) => {
    return(
        <div
        className={cls['main-page-layout']}
        >
            <div
            className={cls["center"]}
            >
                {children}  
            </div>
        </div>
    )
}