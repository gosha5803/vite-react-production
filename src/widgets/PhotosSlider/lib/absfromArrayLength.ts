export const isFarThanOne = (i: number, activeIndex: number, arrayLength: number): boolean => {
    
    const absDifference = (Math.abs(activeIndex - i))
    const arrayMiddle = Math.floor((arrayLength - 1) / 2)

    return !(absDifference < arrayMiddle) && !(arrayLength - absDifference < 2) 
}