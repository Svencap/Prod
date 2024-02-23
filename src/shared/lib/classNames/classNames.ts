export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (cls: string, mode: Mods = {}, additional: Array<string | undefined> = []) => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mode)
        .filter(([cls, value]) => Boolean(value))
        .map(([cls, value]) => cls),
].join(' ');
