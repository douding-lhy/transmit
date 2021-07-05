gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Click, function () {
    radio.sendString("stop")
    basic.showString("stop")
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    radio.sendString("left")
    basic.showString("left")
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    radio.sendString("right")
    basic.showString("right")
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    radio.sendString("slow")
    basic.showString("slow")
})
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("start")
        basic.showString("start")
    }
})
