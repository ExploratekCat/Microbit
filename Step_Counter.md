# Step Counter

## Introduction
Welcome to the Step Counter tutorial of the Canada Science and technology Museum.
The goal of this activity is to learn some basic functions of the micro:bit by coding a simple device that counts the number of steps you take. 


## Step 1
**Create Variable**

First we need to teach the micro:bit to count, by giving it a place to keep track of the number of steps it detects.
- In the ``||variables: Variables||`` tab, click "Make a Variable..." and name it ``||variables: steps||``.
- In the ``||variables: Variables||`` tab, drag in ``||variables: set steps to (0)||`` and drop it in ``||basic: on start||``.
```blocks
let steps = 0
```

## Step 2
**Start Counting**

Now we need the micro:bit to add one step to the count every time it detects a shake.
- In the ``||input: Input||`` tab, drag in ``||input: on shake||``.
- In the ``||variables: Variables||`` tab, drag in ``||variables: change steps by (1)||`` and drop it in ``||input: on shake||``.
```blocks
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
```


## Step 3
**Display Steps**

Now we want the micro:bit to show us how many steps it has counted, by displaying the number with its LEDs.
- In the ``||basic: Basic||`` tab, drag in ``||basic: show number (0)||`` and drop it in ``||input: on shake||`` below ``||variables: change steps by (1)||``.
- In the ``||variables: Variables||`` tab, drag in ``||variables: steps||`` and drop it on top of the 0 in ``||basic: show number (0)||``.

```blocks
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
```

## Step 4
**Test Code**

Using the "SHAKE" button on the virtual micro:bit, test your code.  If it works as expected, download it to your micro:bit, add the battery pack and start walking!
For suggestions on how to improve your step counter, click "Next.".


## Step 5
**Go Further**

Many real step counters let you choose a certain number of steps as a goal.  You'll need ``||logic: Logic||`` blocks to compare the current number of steps to your goal.
What happens when you reach your goal is up to you.  You can use the ``||music: Music||`` blocks to play a melody, or the ``||basic: Basic||`` blocks to show a picture. Experiment and make it your own!
(Tip: Use a small number for your goal while testing, otherwise you'll have to shake it a lot of times to see what happens!)
```blocks
basic.forever(function () {
    if (steps == 10) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Heart)
    }
})
```

