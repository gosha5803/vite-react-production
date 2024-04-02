import { FC } from "react";
import { ILayoutInterface } from "../../../shared/Interfaces/layout-interfaces";
import cls from './PhotosSliderLayout.module.scss'

export const PhotosSliderLayout: FC<ILayoutInterface> = ({children}) => {
    return(
        <div
        className={cls["photos-slider-layout"]}
        >
            {children}
        </div>
    )
}