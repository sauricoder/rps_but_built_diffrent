function updateScores () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 1:" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Player 1:" + Rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Player 1:" + Ties)
}
let P1 = 0
let Ties = 0
let P2 = 0
let Rounds = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Wanna play a game, kid?")
Rounds = 0
P2 = 0
Ties = 0
P1 = 0
basic.pause(2000)
updateScores()
