import { css } from "@emotion/react"

export const pxToRem = (pixels: number, base = 16) => {
    return css`
        ${pixels / base + 'rem'}
    `
}

export const UI_COLORS: Record<string, string> =  {
    white: '#ffffff',
    black: '#000',
    light_blue3: '#ebeff7',
    light_blue2: '#2281C4',
    light_blue: '#F6F9FD',
    grey: '#A4B0C0',
    gray2: '#5E6871',
    light_gray: '#73839',
    light_gray2: '#F5F5F5',
    light_gray3: '#73839C',
    light_gray4: '#dee5ef',
    light_gray5: '#F7F8FA',
    dark_gray: '#293854',
    green: '#0bc196',
    dark_green: '#228b22',
    light_green: '#089171',
    red: '#B11B1B',
    yellow: '#F2A818',
    goldenOcher: '#B0892A'
}
