
## Step 1
Welcome to the **Light Detection** tutorial from the Canada Science and Technology Museum.

The LED display on the micro:bit can also be used to measure the amount of light shining on it. This means the micro:bit can make different things happen, depending on how light or dark it is.
The purpose of this activity is to learn how to program the micro:bit to react to light, and then experiment with different ways to use this ability.

## Step 2
**Sunlight Sensor**

First, we'll program the micro:bit to tell us when it senses a bright light. This means it has to be measuring brightness all the time, so we will put all our code in the ``||basic: forever||`` block.
We need an ``||logic: if then||`` block to tell the micro:bit how to make a decision about whether the light is bright enough or not.
- In the ``||logic: Logic||`` tab, drag in ``||logic: if true then else||`` and drop it in ``||basic: forever||``.

```blocks
basic.forever(function () {
    if (true) {  	
    } else {
    }
})
```

## Step 3

**Light Level**

The micro:bit measures brightness on a scale from 0 to- 255.  We need to choose a number to represent the boundary between light and dark. Let's start with 100. You can change this number later to adjust how sensitive the detector is.
If the brightness measurement is greater than 100, the micro:bit will do one action;, and if it's less than 100, the micro:bit will do a different action.
In math, we use the symbols < = and > to represent less than, equal to, and greater than.  Micro:bits understand the same symbols.
- In the ``||logic: Logic||`` tab, drag in ``||logic: (0) = (0)||`` and drop it on top of ``||logic: true||`` in  ``||logic: if true then else||``.
- Click on the ``||logic: =||`` in ``||logic: (0) = (0)||`` and change it to a ``||logic: >||``.
- In the ``||input: Input||`` tab, drag in ``||input: light level||`` and drop it on the 0 on the left in ``||logic: (0) > (0)||``
- Click on the 0 on the right in ``||logic: (0) > (0)||`` and type 100.


```blocks
basic.forever(function () {
    if (input.lightLevel() > 100) {
    } else {   	
    }
})
```

## Step 4
**Display Results**

We'll tell the micro:bit to display a picture of a sun when it detects light, and a blank screen when it doesn't.
- In the ``||basic: Basic||`` tab, drag in ``||basic: show leds||`` and drop it in the first slot under ``||logic: if then||``.
- Draw a sun symbol by clicking on the individual LED squares, to turn them on or off.
- In the ``||basic: Basic||`` tab, drag in ``||basic: clear screen||`` and drop it in under ``||logic: else||``.

```blocks
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
})
```

## Step 5

**Test and Download**
Test your program by dragging the light level slider on the top left corner of the virtual micro:bit up and down. If it works as expected, download the code to your micro:bit and test it out!
Try covering the micro:bit with your hand, or turning the lights on and off in the room.  Put the micro:bit in a drawer or box, then open and close it.  Could you add a speaker and turn this into an alarm?  
Click "Next" for more suggestions on how to experiment with this project.

```blocks
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
```
## Step 6 
**Extensions**
What if we wanted to change the way our sensor worked, so that it detected dark instead of light? 
- Click on the ``||logic: >||`` in ``||logic: (0) > (0)||`` and change it to ``||logic: <||``. Now when the light level is below our limit, the sun will display.
Could you make this into a safety light for biking or walking at night? How could you make the light flash?
What about an energy- efficient light for your home that only turns on when you need it?  What else could it be? 

```blocks
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    } else {
        basic.clearScreen()
    }
})
```
