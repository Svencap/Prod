type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mode: Mods = {}, additional: string[] = []) => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mode)
        .filter(([cls, value]) => Boolean(value))
        .map(([cls, value]) => cls),
].join(' ');
