/**
 * Setting the basics for the activity
 */
// Catches the potato when the opponent shakes their device
radio.onReceivedNumber(function (receivedNumber) {
    Potato = receivedNumber
})
// Starts the game timer
input.onButtonPressed(Button.A, function () {
    Potato = randint(10, 20)
})
// Player action
// 
// If you have the potato, send it to the other player
input.onGesture(Gesture.Shake, function () {
    if (Potato) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
/**
 * 2. Connect 2 devices
 */
/**
 * 1. Establish the potato
 */
let Potato = 0
Potato = -1
radio.setGroup(1)
// In the mind of the potato
// 1. Checks if the game is done then displays loosing screen
// 2. Checks that the players doesn't have the potato, if so displays nothing
// 3. Checks if you are holding the potato, then counts down the timer
basic.forever(function () {
    if (Potato == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (Potato == -1) {
        basic.clearScreen()
        if (Potato > 0) {
            basic.showIcon(IconNames.Target)
            Potato += -1
        }
    }
})
