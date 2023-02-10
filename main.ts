basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showString("\"SELAMAT SORE\"")
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
    music.setVolume(125)
})
