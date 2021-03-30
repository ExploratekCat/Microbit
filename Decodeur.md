# Step 1
Bienvenue au tutoriel **« Décodeur »** du Musée des sciences et de la technologie du Canada.

Cette activité nécessite 2 joueurs. Tu vas coder les symboles qui composent le code Morse, un point et un tiret. Tu vas pouvoir utiliser ces symboles pour envoyer des messages codés à ton partenaire. Peux-tu le déchiffrer ?

## Step 2
**Définir le groupe radio**

Pour pouvoir envoyer un message, tu dois d'abord régler la fonction radio.
1. Dans l'onglet Radio, fais glisser le bloc ``||radio: définir puissance de transmission (7)||`` et insère-le dans le bloc ``||basic: au démarrage||``. 
2. Choisis ensuite le bloc ``||radio: définir groupe||`` et place-le sous le bloc ``||radio: définir puissance de transmission (7)||``.
3. Clique sur le bouton « Suivant », dans le coin supérieur droit de l'écran, pour passer aux instructions suivantes.

```blocks
radio.setTransmitPower(7)
radio.setGroup(1)
```

## Step 3
**Programmer et envoyer le point**

Maintenant, tu dois programmer le point du code morse que tu enverras à ton coéquipier.
1. Fais glisser le bloc ``||input: lorsque le bouton A est pressé||`` dans ton espace de travail. 
2. Ensuite, fais glisser le bloc ``||basic: montrer LEDs||`` et insère-le dans ``||input: lorsque le bouton A est pressé||``. 
3. Choisis les carrés qui devront s'allumer. Assure-toi qu'ensemble, ils ont la forme d'un point. 
4. Dans l'onglet Radio, choisis le bloc ``||radio: envoyer le nombre (0) par radio||`` et place-le sous le bloc ``||basic: montrer LEDs||``.
5. Ajoute un bloc ``||basic: pause (ms)||`` à la séquence. 
6. Enfin, ajoute un deuxième ``||basic: effacer l'écran||`` et un autre ``||basic: pause (ms)||`` pour compléter la séquence. 

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

## Step 4
**Programmer et envoyer le tiret**
 
À part quelques petites différences, les étapes de programmation du tiret sont presque les mêmes que celles pour le point. 
 
1. Fais glisser un nouveau bloc ``||input: lorsque le bouton A est pressé||``. Remplace le **A** par un **B**. 
2. Ensuite, fais glisser le bloc ``||basic: montrer LEDs||`` et insère-le dans ``||input: lorsque le bouton B est pressé||``. 
3. Choisis les carrés qui formeront un tiret. Clique sur le bouton d'indice si tu as des doutes. 
4. Ajoute un nouveau bloc ``||basic: pause (ms)||`` à la séquence. 
5. Ajoute ensuite un bloc ``||radio: envoyer le nombre par radio||``. Remplace le **0** par un **1**.
6. Enfin, ajoute un bloc ``||basic: effacer l'écran||`` vide et un autre ``||basic: pause (ms)||`` pour terminer la séquence. 

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

## Step 5
**Programmer un symbole de fin de message**

Pour que ton ou ta partenaire sache que ton message est terminé, nous allons programmer un autre symbole en suivant les mêmes étapes que les deux dernières séquences.
1. Fais glisser un bloc ``||input: lorsque secouer||``. 
2. Ajoute un nouveau bloc ``||basic: montrer LEDs||`` à la séquence. Choisis les carrés qui formeront un X. 
3. Ajoute un bloc ``||radio: envoyer le nombre par radio||``. Remplace le **0** par un **2**. 
4. Ajoute ensuite un bloc ``||basic: pause (ms)||``. 
5. Enfin, ajoute un bloc ``||basic: effacer l'écran||`` vide et un bloc ``||basic: pause (ms)||`` pour terminer la séquence.

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
## Step 6
**Programmer la radio pour recevoir des messages**

1. Pour commencer, choisis le ``||radio: quand une donnée est reçu par radio (receiveNumber)||`` et dépose-le dans ton espace de travail. 
2. Choisi l'option "Créer une variable" dans l'onglet ``||variable||``et nomme là "appelRadio". 
3. Remplace le bloc ``||variable: radio received||`` par ``||variable:appelRadio ||``. 
3. Ensuite, choisis le bloc ``||logic: si vrai alors||``. Insère-le dans le bloc en dessous.  
4. Tu dois modifier la variable « vrai » dans la fonction logique. Place un bloc ``||logic: 0=0||`` par-dessus ``||logic: vrai||``.
5. Remplace le premier **0** du bloc ``||logic: 0||`` en faisant glisser la variable ``||variable: appelRadio||``.

```blocks
radio.onReceivedNumber(function (appelRadio) {
    if (appelRadio == 0) {
        
```

## Step 7
**Programmer la radio pour recevoir des messages- *suite* **
1. Dans le bloc ``||logic: si…alors||``, tu dois ajouter ``||basic: montrer LEDs||`` sous la section « si ». Choisis les DEL qui formeront un point. 
2. Clique sur le + au bas du bloc ``||logic: si...alors||`` afin d'ajouter une autre condition à ta variable.
3. Remplace le ``||logic: vrai||`` par ``||logic: 0=0||``, puis remplace le premier **0** par ``||variable: appelRadio||`` en la faisant glisser. Remplace le deuxième **0** par un **1**. 
4. Ajoute un deuxième ``||basic: montrer LEDs||`` à la séquence. Choisis les carrés qui formeront un tiret. 


```blocks
radio.onReceivedNumber(function (appelRadio) {
    if (appelRadio == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (appelRadio == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
```

## Step 8

**Programmer la radio pour recevoir des messages- *suite* **
1. Clique sur le + encore une fois afin d'ajouter un autre bloc ``||logic: si...alors||``. Ajoute un bloc ``||logic: 0=0||``et remplace le premier **0** par ``||variable: appelRadio||``. Remplace le deuxième **0** par un **2**.
2. Ajoute un bloc ``||basic: montrer LEDs||`` et choisis les carrés qui formeront le symbole X.
3. La toute dernière étape est d'ajouter un bloc ``||basic: pause (ms)||`` puis un bloc ``||basic: effacer l'écran||``vide. 

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


## Step 11 
**Une dernière étape**

Félicitations, tu as réussi la programmation de l'activité « Décodeur ». Maintenant il est temps de jouer! 
1. Télécharge ta programmation en la sauvegardant sur un disque local.
2. Fais glisser ton fichier .hex sauvegardé vers ton micro:bit (assure-toi qu'il est relié par connexion USB).
3. Débranchez le micro:bit de l'ordinateur et ajoutez le bloc-piles.
4. Essayez-le contre un autre joueur qui possède également un micro:bit codé dans le même groupe radio.
