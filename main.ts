input.onPinPressed(TouchPin.P0, function () {
    cas1 = control.eventTimestamp()
    reakcia1 = cas1 - start_cas
})
input.onPinPressed(TouchPin.P2, function () {
    reakcia1 = 0
    reakcia2 = 0
    for (let _index = 0; _index <= 2; _index++) {
        basic.showNumber(3 - _index)
        basic.pause(100)
        basic.clearScreen()
    }
    oneskorenie = 200 * randint(3, 9)
    basic.pause(oneskorenie)
    basic.showIcon(IconNames.Skull)
    hra_zacala = true
    start_cas = control.eventTimestamp()
})
input.onPinPressed(TouchPin.P1, function () {
    cas2 = control.eventTimestamp()
    reakcia2 = cas2 - start_cas
})
let cas2 = 0
let oneskorenie = 0
let reakcia2 = 0
let start_cas = 0
let reakcia1 = 0
let cas1 = 0
let hra_zacala = false
hra_zacala = false
basic.forever(function () {
    while (hra_zacala && (reakcia1 > 0 || reakcia2 > 0)) {
        if (reakcia1 > reakcia2) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else if (reakcia1 < reakcia2) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        hra_zacala = false
    }
})
