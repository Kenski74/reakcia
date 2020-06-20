let cas1 = 0
let hra_zacala = false
let start_cas = 0
let reakcia1 = 0
let reakcia2 = 0
let cas2 = 0
input.onPinPressed(TouchPin.P0, function () {
    cas1 = input.runningTime()
})
input.onPinPressed(TouchPin.P2, function () {
    for (let _index = 0; _index <= 2; _index++) {
        basic.showNumber(3 - _index)
        basic.pause(100)
        basic.clearScreen()
    }
    basic.pause(randint(0, 5000))
    basic.showIcon(IconNames.Skull)
    hra_zacala = true
    start_cas = input.runningTime()
    reakcia1 = 0
    reakcia2 = 0
})
input.onPinPressed(TouchPin.P1, function () {
    cas2 = input.runningTime()
})
basic.forever(function () {
    while (hra_zacala) {
        if (cas1 < cas2 && cas1 > start_cas || cas2 < start_cas) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        }
        if (cas2 < cas1 && cas2 > start_cas || cas1 < start_cas) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
        hra_zacala = false
    }
})
