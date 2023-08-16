let start_of_timer = 0
basic.forever(function () {
    if (input.lightLevel() != 50) {
        start_of_timer = input.runningTime()
        while (input.runningTime() - start_of_timer <= 20000) {
            music.play(music.stringPlayable("C5 B G A B C5 B A ", 500), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("G A B G A B G A ", 500), music.PlaybackMode.UntilDone)
            music.play(music.stringPlayable("- B G A B G A B ", 500), music.PlaybackMode.UntilDone)
            basic.showIcon(IconNames.Target)
            basic.showIcon(IconNames.Diamond)
        }
        basic.showIcon(IconNames.Yes)
    }
})
