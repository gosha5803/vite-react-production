import { photosConstants } from "../../constants/photosApiConstants"
import { IPhotosResponse } from "../../model/types/photos-request-types/photos-request"

export const getPhotosService = async(number: number = 5): Promise<IPhotosResponse[]> => {
    const response = await fetch(`${photosConstants.base_url}?api_key=${photosConstants.api_key}&limit=${number}`)
    // const response = await fetch(`${photosConstants.json_placeholder_url}?_limit=${number}`)
    const data = await response.json()
    
    return data
}