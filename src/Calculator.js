import { MEM_VALUE } from './contains'

export class Calculator {
    constructor() {
        this.value = 0
        this.history = []
        this.memory = 0
    }

    resetMemory() {
        this.memory = 0
        MEM_VALUE.innerHTML = this.memory
    }

    changeMemory(value) {
        this.memory += value
        MEM_VALUE.innerHTML = this.memory
    }

    resetValue(value) {
        this.value = value
    }

    executeCommand(command) {
        this.history.push(this.value)
        this.value = command.execute(this.value)
    }

    undo() {
        this.resetValue(this.history.pop())
    }
}
