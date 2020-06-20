let cas1 = 0
let cas2 = 0
let hra_zacala = false
let start_cas = 0
input.onPinPressed(TouchPin.P0, function () {
    cas1 = input.runningTime()
})
input.onPinPressed(TouchPin.P2, function () {
    cas1 = 1e+21
    cas2 = 1e+21
    for (let _index = 0; _index <= 2; _index++) {
        basic.showNumber(3 - _index)
        basic.pause(100)
        basic.clearScreen()
    }
    basic.pause(randint(0, 3000))
    basic.showIcon(IconNames.Skull)
    hra_zacala = true
    start_cas = input.runningTime()
})
input.onPinPressed(TouchPin.P1, function () {
    cas2 = input.runningTime()
})
basic.forever(function () {
    while (hra_zacala) {
        if (cas1 > start_cas && cas1 < cas2 || cas2 < start_cas) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            cas1 = 1e+21
            cas2 = 1e+21
            hra_zacala = false
        }
        if (cas2 > start_cas && cas2 < cas1 || cas1 < start_cas) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            cas1 = 1e+21
            cas2 = 1e+21
            hra_zacala = false
        }
    }
})
