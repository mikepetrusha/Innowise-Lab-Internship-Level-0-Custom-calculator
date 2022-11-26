import {
    CALCULATOR,
    CURRENT_STATE,
    ERROR,
    SCOREBOARD,
    SIGN_VALUES,
} from './contains'
import { CommandSelector } from './CommandSelector'

export const lastValueValidation = () => {
    if (CURRENT_STATE.command) {
        SCOREBOARD.value = String(CALCULATOR.value)
        CURRENT_STATE.command = ''
    } else if (CALCULATOR.history.length) {
        ERROR.value ? (ERROR.value = '') : ''
        CALCULATOR.undo()
        SCOREBOARD.value = String(CALCULATOR.value)
    } else {
        ERROR.value = 'History is empty'
    }
}

export const twoValueValidation = (com) => {
    const isPointOrMinusOrPlus =
        SCOREBOARD.value === '.' ||
        SCOREBOARD.value === '-' ||
        SCOREBOARD.value === '+'
    const invalidValue =
        !SCOREBOARD.value ||
        (SCOREBOARD.value.length && isPointOrMinusOrPlus) ||
        CURRENT_STATE.signIndex
    const rootFromNegative =
        com.value === 'x^1/y' && Number(SCOREBOARD.value) < 0
    if (CURRENT_STATE.command) {
        ERROR.value = 'Perform previous command'
    } else if (invalidValue) {
        ERROR.value = 'X value should be one number'
    } else if (rootFromNegative) {
        ERROR.value = "Can't find a root of negative number"
    } else {
        CALCULATOR.resetValue(Number(SCOREBOARD.value))
        SCOREBOARD.value = ''
        CURRENT_STATE.command = com.value
    }
}

export const Validation = (com) => {
    const isPointOrMinusOrPlus =
        SCOREBOARD.value === '.' ||
        SCOREBOARD.value === '-' ||
        SCOREBOARD.value === '+'
    const invalidValue =
        !SCOREBOARD.value ||
        (SCOREBOARD.value.length && isPointOrMinusOrPlus) ||
        CURRENT_STATE.signIndex
    const divisionByZero = Number(SCOREBOARD.value) === 0 && com.value === '1/x'
    const rootFromNegative =
        Number(SCOREBOARD.value) < 0 &&
        (com.value === 'x^1/2' || com.value === 'x^1/3')
    const factorialFromRealNumber =
        SCOREBOARD.value.includes('.') && com.value === '!'

    if (CURRENT_STATE.command) {
        ERROR.value = 'Perform previous command'
    } else if (invalidValue) {
        ERROR.value = 'The value should be one number'
    } else if (divisionByZero) {
        ERROR.value = 'Division by 0'
    } else if (rootFromNegative) {
        ERROR.value = "Can't find a root of negative number"
    } else if (factorialFromRealNumber) {
        ERROR.value = "Can't find factorial of a real number"
    } else if (com.value === '10^x') {
        CALCULATOR.resetValue(10)
        CALCULATOR.executeCommand(
            CommandSelector(com.value, Number(SCOREBOARD.value))
        )
        SCOREBOARD.value = String(CALCULATOR.value)
    } else {
        CALCULATOR.resetValue(Number(SCOREBOARD.value))
        CALCULATOR.executeCommand(CommandSelector(com.value))
        SCOREBOARD.value = String(CALCULATOR.value)
    }
}

export const signValidation = (sign) => {
    const startOfInput = !SCOREBOARD.value || SCOREBOARD.value === '-'
    const lastSymbolIsSign = SIGN_VALUES.includes(
        SCOREBOARD.value[SCOREBOARD.value.length - 1]
    )

    if (startOfInput) {
        if (sign.value === '-' && !SCOREBOARD.value) {
            SCOREBOARD.value += sign.value
        } else if (sign.value === '+') {
            SCOREBOARD.value = ''
        }
    } else if (lastSymbolIsSign) {
        replaceSign(sign)
    } else if (CURRENT_STATE.command) {
        twoSignCommandHandler(sign)
    } else {
        arithmeticCommandHandler(sign)
    }
}

const replaceSign = (sign) => {
    const canAddMinus =
        sign.value === '-' &&
        CURRENT_STATE.signIndex === SCOREBOARD.value.length - 1
    const lastTwoSymbolsAreSigns =
        CURRENT_STATE.signIndex &&
        CURRENT_STATE.signIndex !== SCOREBOARD.value.length - 1

    if (canAddMinus) {
        SCOREBOARD.value += sign.value
    } else if (lastTwoSymbolsAreSigns && sign.value !== '=') {
        SCOREBOARD.value =
            SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 2) +
            sign.value
    } else if (sign.value !== '=') {
        SCOREBOARD.value =
            SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 1) +
            sign.value
    }
}

const twoSignCommandHandler = (sign) => {
    const invalidValue =
        !SCOREBOARD.value || !Number.isFinite(Number(SCOREBOARD.value))
    const divisionByZero =
        Number(SCOREBOARD.value) === 0 && CURRENT_STATE.command === 'x^1/y'
    const rootFromNegative =
        CALCULATOR.value < 0 &&
        Number(SCOREBOARD.value) < 1 &&
        Number(SCOREBOARD.value) > -1

    if (invalidValue) {
        ERROR.value = 'N value should be one number'
    } else if (divisionByZero) {
        ERROR.value = 'Division by 0'
    } else if (rootFromNegative) {
        ERROR.value = "Can't find a root of negative number"
    } else {
        CALCULATOR.executeCommand(
            CommandSelector(CURRENT_STATE.command, Number(SCOREBOARD.value))
        )
        SCOREBOARD.value = String(CALCULATOR.value)
        CURRENT_STATE.command = ''
        CURRENT_STATE.signIndex =
            sign.value === '=' ? 0 : SCOREBOARD.value.length
        SCOREBOARD.value += sign.value === '=' ? '' : sign.value
    }
}

const arithmeticCommandHandler = (sign) => {
    if (CURRENT_STATE.signIndex) {
        let y = Number(
            SCOREBOARD.value.substring(
                CURRENT_STATE.signIndex + 1,
                SCOREBOARD.value.length
            )
        )
        const divisionByZero =
            y === 0 && SCOREBOARD.value[CURRENT_STATE.signIndex] === '÷'

        if (divisionByZero) {
            ERROR.value = 'Division by 0'
        } else {
            CALCULATOR.executeCommand(
                CommandSelector(SCOREBOARD.value[CURRENT_STATE.signIndex], y)
            )
            SCOREBOARD.value = String(CALCULATOR.value)
            CURRENT_STATE.signIndex =
                sign.value === '=' ? 0 : SCOREBOARD.value.length
            SCOREBOARD.value += sign.value === '=' ? '' : sign.value
        }
    } else {
        CALCULATOR.resetValue(Number(SCOREBOARD.value))
        CURRENT_STATE.signIndex =
            sign.value === '=' ? 0 : SCOREBOARD.value.length
        SCOREBOARD.value += sign.value === '=' ? '' : sign.value
    }
}
