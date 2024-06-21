type Mods = Record<string, boolean | string>

export const classNames = (cls: string, options: Mods = {}, additional: Array<string | undefined> = []): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(options)
            .filter(([_className, value]) => !!value)
            .map(([className]) => className)
    ].join(' ')
}