function fadeOnce () {
    while (LoopOnce == true) {
        if (GoingForward) {
            if (brightness < 1024 - stepsize) {
                brightness += stepsize
            } else {
                brightness += stepsize
                GoingForward = false
            }
        } else {
            if (brightness > stepsize) {
                brightness += 0 - stepsize
            } else {
                brightness += 0 - stepsize
                GoingForward = true
                LoopOnce = false
            }
        }
        basic.pause(1)
        pins.analogWritePin(AnalogPin.P0, brightness)
    }
}
function playSound () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    randint(3, 20),
    randint(1, 3),
    255,
    randint(0, 100),
    2000,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.InBackground)
}
input.onButtonPressed(Button.A, function () {
    playSound()
    LoopOnce = true
    fadeOnce()
})
let stepsize = 0
let LoopOnce = false
let GoingForward = false
let brightness = 0
brightness = 16
GoingForward = true
LoopOnce = false
stepsize = 4
basic.forever(function () {
	
})
