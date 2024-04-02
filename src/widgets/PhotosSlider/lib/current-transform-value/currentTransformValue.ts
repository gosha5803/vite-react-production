export const currentTransformValue = (arrayLength: number, currentElement: number, index: number): number => {
    const calcValue = Math.floor((arrayLength - 1) / 2) - currentElement
    
    if(arrayLength <= calcValue + index) {
        return -(arrayLength - calcValue)
        
    }
    
    if(calcValue + index < 0) {
        return arrayLength + calcValue
    }

    return calcValue
}