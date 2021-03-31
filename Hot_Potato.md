# Tutorial: Hot Potato 

## Step 1: 
Welcome to the **Hot Potato** tutorial of the Canada Science and technology Museum.
This game requires 2 players. You will code an object that is sent from one micro:bit to another by shaking it, while a timer counts down. 
Try not to be holding the potato when the timer ends. 


## Step 2: 
**Create the setting** 

- Establish what is the potato 
- Connect the two players devices

1. Go in the variable tab and create a new variable, name it ``||variable: potato||``.
2. Drag the block ``||variables: set variable to 0||``, and place it under the start block, change the number to -1.
3. In the radio tab, select the ``||radio: radio group||`` block. 
4. Change the number for the one given to you by your teacher. 


```blocks
let Potato = 0
Potato = -1
radio.setGroup(1)
``` 

## Step 3: 
**Define the player action**

If you have the potato, send it to the other player 
1. In the Input tab, select and drag the ``||input: on shake||`` block, place it unthetered
2. Select the ``||logic: if-true-then||`` block from the Logic tab
3. Add the ``||variable: potato||`` the first location on the ``||logic: if-true-then||`` block
4. In the radio tab, drag the ``||radio: radio send number||`` block, add a ``||variable: potato||`` variable in that block 
5. Drag from the variable tab the ``||variable: set potato to||`` block and change the number to -1 


```blocks 
input.onGesture(Gesture.Shake, function () {
    if (Potato) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
```


## Step 4: 
**Throw the potato**

Set your device to catch the potato when the opponent shakes their own device
1. In the input tab, select the ``||input: on button A pressed||`` block and drag in below, unthetered 
2. Go in the variable tab and nest the ``||variable: set potato to 0||`` block
3. In the math tab, select ``||math: pick random 0 to 10||`` block, add it in the space for 0 and change it to indicate 10 to 20
4. Go in the ``||radio||`` tab and add the ``||radio: on radio onReceivedNumber||`` block, place it unthethered. 
5. In it, nest the block ``||variable: set potato to 0||`` from the ``||variable||`` tab, then drag the ``||receivedNumber||``into this block to replace the 0. 

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    Potato = receivedNumber
})
// Starts the game timer
input.onButtonPressed(Button.A, function () {
    Potato = randint(10, 20)
})
```


## Step 5: 
**Define what the potato is doing**

- Checks if the game is done then displays loosing screen
- Checks that the players doesn't have the potato, if so displays nothing
- Checks if you are holding the potato, then counts down the timer

1. Drag from the Basic tab the ``||basic: forever||`` block, unthetered
2. From the logic tab, nest in the ``||logic: if true then||``, then add ``||logic: 0 = 0||`` block, repeat two more times
3. In the first ``||logic: if-0-then||`` block, replace the first 0 with a ``||variable:potato||``variable 


```blocks
basic.forever(function () {
    if (Potato == 0) {
 if (Potato == 0) {
 if (Potato == 0) {
 ```


## Step 6:
**Add display symbols- *continued* **

1. Select the ``||basic: showIcon||`` block from Basics, and add it underneath the first ``||logic: if potato = 0||`` block. Choose the Skull icon. 
2. Drag in ``||basic: clear screen||`` block from Basics under the second ``||Logic:if then||`` block
3. In the third ``||logic: if then||`` block, change the ``||logic: ""=""||`` symbol for the ``||logic: "">""||``symbol
4. Drag a ``||basic: showIcon||`` block from basic below the third ``||logic: if-then||`` and select an image that reminds you of a potato
5. From the variable tab, add a ``||variables: change potato by 1||`` block, and modify the number to -1


```blocks
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
```


## Step 7: 

Congratulations, you have completed the Hot Potato Game, now it's time to play! 
- Download your code by saving it locally
- Drag your save .hex file to your Micro:bit (make sure it is plugged in with your USB). 
- Unplug the micro:bit from the computer and add the battery pack. 
- Try it out against another player who also has a coded micro:bit in the same radio group.   
- Could you add a third or fourth player?


