stlacene = 0

def on_forever():
    global stlacene
    stlacene = pins.analog_read_pin(AnalogPin.P1)
    basic.show_number(stlacene)
basic.forever(on_forever)
