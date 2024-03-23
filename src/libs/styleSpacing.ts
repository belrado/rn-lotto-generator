type DefaultAliases = {
    t: string;
    r: string;
    b: string;
    l: string;
    v: string;
    h: string;
};
const defaultAliases: DefaultAliases = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    v: 'Vertical',
    h: 'Horizontal',
};

function createStyles(spacing: string, sizes: Array<any>, aliases: object) {
    const styles: any = {};

    sizes.forEach((size, index) => {
        styles[index] = { [spacing]: size };
    });

    Object.entries(aliases).forEach(([alias, position]) => {
        sizes.forEach((size, index) => {
            styles[`${alias}${index}`] = { [`${spacing}${position}`]: size };
        });
    });

    return styles;
}
export function createMargin(sizes: Array<any>, aliases = defaultAliases) {
    return createStyles('margin', sizes, aliases);
}

export function createPadding(sizes: Array<any>, aliases = defaultAliases) {
    return createStyles('padding', sizes, aliases);
}
