pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
    serial.writeValue("x", pins.digitalReadPin(DigitalPin.P1))
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
