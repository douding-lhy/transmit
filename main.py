def my_function():
    radio.send_string("start")
    basic.show_string("start")
gamePad.on_event(GamerBitPin.P1, GamerBitEvent.CLICK, my_function)

def my_function2():
    radio.send_string("left")
    basic.show_string("left")
gamePad.on_event(GamerBitPin.P14, GamerBitEvent.DOWN, my_function2)

radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)
