/* eslint-disable no-undef */
import './styles/main.css'
import {
    DARK_THEME_BTN,
    LIGHT_THEME_BTN,
    MEMORIES,
    NUMBERS,
    ONE_VALUE_COMMANDS,
    PREV_VALUE_BTN,
    SCOREBOARD,
    SIGNS,
    TWO_VALUE_COMMANDS,
    ERROR,
    DELETEBUTTON,
} from './contains'
import {
    Validation,
    twoValueValidation,
    signValidation,
    lastValueValidation,
} from './errorHandler'
import { themeChangeDark, themeChangeLight } from './themeChange'

DELETEBUTTON.addEventListener('click', () => {
    SCOREBOARD.value = ''
})

NUMBERS.forEach((num) =>
    num.addEventListener('click', () => (SCOREBOARD.value += num.value))
)

SIGNS.forEach((sign) =>
    sign.addEventListener('click', () => signValidation(sign))
)

ONE_VALUE_COMMANDS.forEach((com) =>
    com.addEventListener('click', () => Validation(com))
)

TWO_VALUE_COMMANDS.forEach((com) =>
    com.addEventListener('click', () => twoValueValidation(com))
)

MEMORIES.forEach((mem) => mem.addEventListener('click', () => Validation(mem)))

DARK_THEME_BTN.addEventListener('click', themeChangeDark)
LIGHT_THEME_BTN.addEventListener('click', themeChangeLight)

PREV_VALUE_BTN.addEventListener('click', lastValueValidation)

SCOREBOARD.addEventListener('input', ERROR.value ? (ERROR.value = '') : '')

const descriptorProp = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    'value'
)
const descriptorAttr = Object.getOwnPropertyDescriptor(
    Element.prototype,
    'setAttribute'
)

Object.defineProperties(SCOREBOARD, {
    value: {
        get: descriptorProp.get,
        set(value) {
            ERROR.value ? (ERROR.value = '') : ''
            descriptorProp.set.call(this, value)
        },
    },
    setAttribute: {
        value(attr, value) {
            if (attr === 'value') {
                ERROR.value ? (ERROR.value = '') : ''
            }
            descriptorAttr.value.call(this, attr, value)
        },
    },
})
