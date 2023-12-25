let number = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("Catalina is dom!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C D E C D F E D ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E C D F E D ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E C D F E D ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E C D F E D ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
})
