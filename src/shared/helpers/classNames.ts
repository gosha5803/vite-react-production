type Mods = Record<string, boolean | string>

export const classNames = (cls: string, options: Mods, additional: string[]): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(options)
            .filter(([_className, value]) => !!value)
            .map(([className]) => className)
    ].join(' ')
}