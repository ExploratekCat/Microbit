# Code Breaker
Welcome to the **Code Breaker** tutorial from the Canada Science and Technology Museum.

This game requires 2 players. You will be coding symbols that make up the Morse Code, a dot and a dash. You'll be able to use these symbols to send coded messages to your partner. Can you crack it?

## Step 1
**Set radio**

To send your message, set up the radio function. 
1. In the radio tab, drag in ``||radio: radio set transmit power (7)||`` and place it in ``||basic: on start||`` . 
2. Next, select the ``||radio: radio set group||`` and place it under the first radio block.

```blocks 
radio.setTransmitPower(7)
radio.setGroup(1)
```

## Step 2
**Create and send your dot signal **

Next, code the dot signal. This will get sent to your partner. 

1. Drag in the ``||input: on button A pressed||`` to your workspace. 
2. Next, drag in the ``||basic: showLeds||`` and nest it in ``||input: on button A pressed||``. 
3. Select the squares you want to light up. Make sure it's in the shape of a dot. 
4. In the radio function, select the ``||radio: radio send number (0)||``. Place this under the ``||basic: showLeds||``.
5. Add the ``||basic: pause (ms)||`` to the sequence. 
6. Finally, add a second ``||basic: clearScreen||`` and ``||basic: pause (ms)||`` to end your  sequence. This will create a pause between your symbols. 

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(0)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
})
```

## Step 3
**Create and send your dash signal**

This section of code for your dash is going to look almost the same as the one you just did with a few minor changes.

1. You're going to drag in a new ``||input: on button A pressed||``. Change the A to B. 
2. Add new ``||basic: show leds||`` to this sequence. Select the squares to make a dash.
3. Next, add ``||radio: radio send number||``. Change the 0 to a 1. 
4. Add ``||basic: pause (ms)||``. 
5. Finally, add a blank ``||basic: clearScreen||`` and one more ``||basic: pause(ms)||`` to finish this sequence.  

```blocks
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(1)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
})
```

## Step 4
**Create your message stop gap**
So your partner knows when your message is finished, we are going to code one more symbol, a gap known in Morse code as a stop, doing the exact same thing as the last two sequences.

1. Drag in ``||input: on shake||``. 
2. Add new ``||basic: showLeds||`` to this sequence. Select the squares to make an X. 
3. Add ``||radio: radio send number||``. Change the 0 to a 2. 
4. Next, add ``||basic: pause(ms)||``. 
5. Finally, add blank ``||basic: clearScreen||`` and ``||basic: pause (ms)||`` to finish this sequence.

```blocks
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    radio.sendNumber(2)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
})
```

## Step 5

**Create your Morse Code receiver**

1. To start, select ``||radio: on radio received (receiveNumber)||`` and place it in your workspace. 
2. Next, select and add the ``||logic: if true then||`` bloc underneath. 
3. You need to change the true variable in your logic function. Place ``||logic: 0=0||`` over ``||logic: true||``.
4. Drag in the ``||variable: radio received||``into the first 0 of the ``||logic: 0||`` of the function you just added 



```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        
```

## Step 6
**Create your Morse Code receiver- *continued* **

1. Within ``||logic: if…then||`` we need to add ``||basic: showLeds||`` under the "if" section. Select all the leds to make a dot.  
2. Click the plus at the bottom of your ``||logic: if...then||`` block to add another condition to your variable.
3. Replace the ``||logic: true||`` variable with ``||logic: 0=0||`` and then replace the first 0 with ``||variable: receivedNumber||`` by dragging it. Change the second 0 to a 1. 
4. Add a second ``||basic: showLeds||`` to your sequence. Select the squares to make a dash. 

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
```

## Step 7

**Create your Morse Code receiver- *continued* **
1. Click the plus once again to add another ``||logic: if...then||`` block. Add the ``||logic: 0=0||`` block and replace the first 0 with ``||variable: receivedNumber||``. Change the second 0 to a 2.
2. Add ``||basic: showLeds||`` and select the squares to make your X symbol.
3. The very last step is to add ``||basic: pause (ms)||`` and a blank ``||basic: clearScreen||``.   

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.pause(100)
        basic.clearScreen()
    }
})
```

### Step 8
**One Last Step**

Congratulations, you have completed the Code Breaker activity. Now it's time to send some secret messages!
1. Download your code by saving it locally
2. Drag your save .hex file to your Micro:bit (make sure it is plugged in with your USB). 
3. Unplug the micro:bit from the computer and add the battery pack. 
4. Try it out against another player who also has a coded micro:bit in the same radio group.   
