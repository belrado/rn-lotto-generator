import { StyleSheet } from 'react-native';
import { createMargin, createPadding} from "@/libs/styleSpacing.ts";

export const Colors = {
    transparent: 'rgba(255, 255, 255, 0)',
    white: 'rgb(255, 255, 255)',
    white10: 'rgba(255, 255, 255, 0.1)',
    white87: 'rgba(255, 255, 255, 0.87)',
    whiteTwo: 'rgb(216, 216, 216)',
    whiteThree: 'rgb(246, 246, 246)',
    whiteFour: 'rgb(233, 233, 233)',
    web: 'rgb(235, 235, 235)',
    black: 'rgb(0, 0, 0)',
    black07: 'rgba(0, 0, 0, 0.07)',
    black20: 'rgba(0, 0, 0, 0.2)',
    black50: 'rgba(0, 0, 0, 0.5)',
    black70: 'rgba(0, 0, 0, 0.7)',
    perryWinkle: 'rgb(162, 200, 238)',
    perryWinkleTwo: 'rgb(155, 194, 232)',
    lightBlueGrey: 'rgb(219, 236, 236)',
    cloudyBlue: 'rgb(200, 223, 223)',
    softBlue: 'rgb(119, 170, 236)',
    aquaBlue: 'rgb(0, 223, 219)',
    aquaBlueTwo: 'rgb(10, 213, 209)',
    turquoiseBlue: 'rgb(0, 198, 194)',
    turquoiseBlueTwo: 'rgb(0, 197, 204)',
    greenBlue: 'rgb(70, 177, 181)',
    darkGreyBlue: 'rgb(63, 45, 96)',
    bluePurple: '#6335b4',
    paleRose: 'rgb(248, 192, 207)',
    paleRoseTwo: 'rgb(246, 183, 200)',
    paleGrey: 'rgb(237, 246, 246)',
    lipstick: 'rgb(233, 46, 97)',
    monza: 'rgb(213, 6, 41)',
    brightYellow: 'rgb(255, 247, 0)',
    sunflowerYellow: 'rgb(255, 213, 0)',
    greenApple: 'rgb(117, 200 ,22)',
    softPurple: 'rgb(145, 125, 180)',
    lightPurple: 'rgb(247, 246, 255)',
    greyIshBrown: 'rgb(85, 85, 85)',
    beige: 'rgb(252, 251, 245)',
    silver: 'rgb(204, 201, 210)',
    lightGrey: 'rgb(233, 232, 224)',
    pinkishGrey: 'rgb(199, 199, 199)',
    warmGrey: 'rgb(132, 131, 125)',
    purpleGrey: 'rgb(147, 141, 158)',
    darkBlueGrey: 'rgb(52, 36, 80)',
    settingGrey: 'rgb(241, 241, 241)',
    spanishGray: 'rgb(162, 157, 165)',
    brownishGrey: 'rgb(102, 102, 102)',
    aquaBlueThree: 'rgb(0, 155, 204)',
    dusk: 'rgb(64, 53, 83)',
    dark: 'rgb(61, 50, 80)',
    g7: 'rgb(119, 119, 119)',
    g8: 'rgb(136, 136, 136)',
    g9: 'rgb(153, 153, 153)',
    wf2: 'rgb(242, 242, 242)',
    wf8: 'rgb(248, 248, 248)',
    we8: 'rgb(232, 232, 232)',
    wfb: 'rgb(251, 251, 251)',
    we: 'rgb(238, 238, 238)',
    wc: 'rgb(204, 204, 204)',
    wd: 'rgb(221, 221, 221)',
    wInfoBorder: 'rgb(236, 235, 251)',
    grape: 'rgb(99, 53, 180)',
    grape2: 'rgb(121, 70, 210)',
    grape3: 'rgb(85, 40, 164)',
    grape4: 'rgb(209, 191, 241)',
    grape5: 'rgb(90, 43, 172)',
    green: 'rgb(117, 200, 22)',
    melancholy: 'rgb(36, 93, 226)',
    turquoiseSurf: 'rgb(0, 194, 201)',
    lavenderGray: 'rgb(205, 202, 212)',
    lightGray: 'rgb(193, 193, 193)',
    melRose: 'rgb(212, 188, 255)',
    mercury: 'rgb(229, 229, 229)',
    mineShaft: 'rgb(34, 34, 34)',
    whiteFive: 'rgb(249, 249, 249)',
    violet: 'rgb(208, 194, 233)',
    mintGreen: 'rgb(26, 184, 190)',
};

const createStyles = (spacing: string, sizes: Array<any>) => {
    const styles: any = {};

    let _spacing = spacing.split('');
    let _index = String(_spacing[0]);

    _spacing.map(__spacing => {
        if (__spacing === __spacing.toUpperCase()) {
            _index = _index + String(__spacing);
        }
    });

    _index = _index.toLowerCase();

    sizes.forEach((size, index) => {
        styles[_index + index] = { [spacing]: size };
    });

    sizes.forEach((size, index) => {
        styles[`${_index}${index}`] = { [`${spacing}`]: size };
    });

    return styles;
};

const createSize = () => {
    const styles: any = {};

    let sizes = [...Array(300).keys()];

    // width
    sizes.forEach((width, index) => {
        styles[`w${index}`] = {
            ['width']: width,
        };
    });

    // height
    sizes.forEach((height, index) => {
        styles[`h${index}`] = {
            ['height']: height,
        };
    });

    return styles;
};

interface FontList {
    B: string;
    b: string;
    l: string;
    m: string;
    r: string;
    t: string;
    n: string;
    v: string;
}

const createFont = () => {
    const styles: any = {};

    let sizes: Array<any> = [...Array(100).keys()];

    let fontList: FontList = {
        B: 'NotoSansKR-Black',
        b: 'NotoSansKR-Bold',
        l: 'NotoSansKR-Light',
        m: 'NotoSansKR-Medium',
        r: 'NotoSansKR-Regular',
        t: 'NotoSansKR-Thin',
        n: 'Verdana',
        v: 'Verdana-Bold',
    };

    Object.entries(fontList).forEach(([alias, font]) => {
        sizes.forEach((size, index) => {
            styles[`${alias}${index}`] = {
                ['fontFamily']: font,
                ['fontSize']: size,
                ['color']: Colors.black,
                ['lineHeight']: size + 2,
            };
        });
    });

    Object.entries(fontList).forEach(([alias, font]) => {
        sizes.forEach(size => {
            sizes.forEach(lh => {
                styles[`${alias}${size}lh${lh}`] = {
                    ['fontFamily']: font,
                    ['fontSize']: size,
                    ['color']: Colors.black,
                    ['lineHeight']: lh,
                };
            });
        });
    });

    return styles;
};
export const f = createFont();

export const m = StyleSheet.create({
    ...createMargin([...Array(150).keys()]),
    ...createStyles('margin', [...Array(150).keys()]),
});

export const p = StyleSheet.create({
    ...createPadding([...Array(150).keys()]),
    ...createStyles('padding', [...Array(150).keys()]),
});

export const commonStyle = StyleSheet.create({
    errorText: {
        ...f.r12lh24,
        letterSpacing: -0.24,
        color: Colors.grape,
    },
});

const getShortHand = (style: string, ...values: number[]) => {
    if (values.length === 1) {
        return { [style]: values[0] };
    }

    const _genCss = (...props: number[]) => ({
        [style + 'Top']: props[0],
        [style + 'Right']: props[1],
        [style + 'Bottom']: props[2],
        [style + 'Left']: props[3],
    });
    if (values.length === 2) {
        return _genCss(values[0], values[1], values[0], values[1]);
    }
    if (values.length === 3) {
        return _genCss(values[0], values[1], values[2], values[1]);
    }
    return _genCss(values[0], values[1], values[2], values[3]);
};

export const padding = (...values: number[]) => getShortHand('padding', ...values);
export const margin = (...values: number[]) => getShortHand('margin', ...values);
