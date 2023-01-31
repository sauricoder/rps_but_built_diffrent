input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    OLED.clear()
    P1 += 1
    OLED.newLine()
    Rounds += 1
    updateScores()
    basic.clearScreen()
    if (P1 == 10) {
        basic.clearScreen()
        OLED.clear()
        basic.showString("Player 1 won")
    }
    if (P2 == 10) {
        basic.clearScreen()
        OLED.clear()
        basic.showString("Player 2 won")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    OLED.clear()
    Rounds += 1
    OLED.newLine()
    Ties += 1
    updateScores()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # # # .
        `)
    OLED.clear()
    P2 += 1
    OLED.newLine()
    Rounds += 1
    updateScores()
    basic.clearScreen()
    if (P1 == 10) {
        basic.clearScreen()
        OLED.clear()
        basic.showString("Player 1 won")
    }
    if (P2 == 10) {
        basic.clearScreen()
        OLED.clear()
        basic.showString("Player 2 won")
    }
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function updateScores () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2:" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
}
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Wanna play a game, kid?")
    Rounds = 0
    P2 = 0
    Ties = 0
    P1 = 0
    basic.pause(2000)
    updateScores()
}
let Ties = 0
let P2 = 0
let Rounds = 0
let P1 = 0
reset()
