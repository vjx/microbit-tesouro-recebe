radio.onReceivedString(function (receivedString) {
    sinal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(sinal, -95, -62, 0, 9),
    9
    )
})
let sinal = 0
radio.setGroup(1)
basic.forever(function () {
	
})
