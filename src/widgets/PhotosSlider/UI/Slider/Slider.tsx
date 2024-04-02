import { FC, useEffect, useState } from "react"
import cls from './Slider.module.scss'
import { getPhotosService } from "../../Services/getPhotosService/getPhotosService"
import { IPhotosResponse } from "../../model/types/photos-request-types/photos-request"
import { currentTransformValue } from "../../lib/current-transform-value/currentTransformValue"
import { isFarThanOne } from "../../lib/absfromArrayLength"

export const Slider: FC = () => {
    const [photos, setPhotos] = useState<IPhotosResponse[]>([])
    const [activePhoto, setActivePhoto] = useState<number>(0)

    useEffect(() => {
        getPhotosService(10)
            .then((photos: IPhotosResponse[]) => successGetPhotos(photos))
            .catch(() => errorGetPhotos())
    }, [])

    const moveSlider = (i: number) => {
        // setInvisiblePhoto(i)
        setActivePhoto(i)
    }

    const successGetPhotos = (data: IPhotosResponse[]) => {
        setPhotos(data)
    }

    const errorGetPhotos = () => [
        console.log('err')
    ]

    return(
        <div
        className={cls["slider-wrapper"]}
        >
            <div
            className={`${cls["image-container"]}`}
            >
                {photos.map((photo: IPhotosResponse, i: number) => 
                    <div
                    key={i}
                    className={
                        `${cls["slider-item"]}`
                    }
                    style={
                        {
                            transform: `translateX(${currentTransformValue(photos.length, activePhoto, i)}00%)`,
                            opacity: isFarThanOne(i, activePhoto, photos.length) ? 0 : 1
                        }
                    }
                    >
                        {(i)}
                        <img
                        key={i}
                        src={photo.url}
                        alt={'/'}
                        className={
                            `${cls["slider-image"]} ${i === activePhoto ? cls['active'] : ''}`
                            
                        }
                        onClick={() => moveSlider(i)}
                        />  
                    </div>                                          
                )}
            </div>
            <div
            className={cls["slider-control"]}
            >
                {Array.from(photos, (_photo, index) => 
                    <div
                    onClick={() => setActivePhoto(index)}
                    key={index}
                    className={`${cls["slider-control-item"]} ${index === activePhoto ? cls["active-control"] : ""}`}
                    ></div>
                )}
            </div>
        </div>
    )
}