input.onButtonPressed(Button.A, function () {
    if (生命 > 0) {
        if (生命 < 9) {
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                . . # . .
                . . # . .
                `)
            生命 += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(生命)
})
let 生命 = 0
生命 = 9
basic.forever(function () {
    if (生命 > 5) {
        basic.showIcon(IconNames.Happy)
    } else if (生命) {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(2000)
    if (生命 > 0) {
        game.addScore(1)
        生命 += -1
    }
})
