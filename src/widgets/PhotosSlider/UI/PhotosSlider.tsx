import { FC } from "react";
import { PhotosSliderLayout } from "../../Layouts/PhotosSliderLayout/PhotosSliderLayout";
import { Slider } from "./Slider/Slider";

export const PhotosSlider: FC = () => {
    return(
        <PhotosSliderLayout>
            <Slider/>
        </PhotosSliderLayout>
    )
}