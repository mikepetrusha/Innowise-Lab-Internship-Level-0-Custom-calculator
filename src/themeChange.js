import {
    ALL_ELEMENTS,
    BODY,
    CURRENT_STATE,
    DARK_THEME_BTN,
    LIGHT_THEME_BTN,
} from './contains'

export const themeChangeDark = () => {
    if (CURRENT_STATE.theme !== 'dark') {
        CURRENT_STATE.theme = 'dark'
        DARK_THEME_BTN.classList.add('selectedTheme')
        LIGHT_THEME_BTN.classList.remove('selectedTheme')

        ALL_ELEMENTS.forEach((el) => (el.style.color = '#e6e6e6'))
        BODY.style.background = 'linear-gradient(#1E3B70 , #29539B)'
    }
}

export const themeChangeLight = () => {
    if (CURRENT_STATE.theme !== 'light') {
        CURRENT_STATE.theme = 'light'
        LIGHT_THEME_BTN.classList.add('selectedTheme')
        DARK_THEME_BTN.classList.remove('selectedTheme')

        ALL_ELEMENTS.forEach((el) => (el.style.color = 'black'))
        BODY.style.background = 'linear-gradient(#2196f3 , #e91e63)'
    }
}
