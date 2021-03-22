# Capteur_de_lumieres

## Introduction
Bienvenue au tutoriel « Capteur de lumière» du Musée des sciences et de la technologie du Canada.

L'affichage à DEL du micro:bit peut aussi servir à mesurer la quantité de lumière à laquelle il est exposé. Cela signifie que le micro:bit peut exécuter des commandes en fonction de la lumière ambiante.
Le but de cette activité est d'apprendre à programmer un micro:bit afin qu'il réagisse à la lumière, puis d'explorer les différentes façons d'exploiter cette capacité.

## Step 1
**Capter la lumière solaire**

D'abord, nous allons programmer le micro:bit afin qu'il puisse nous aviser lorsqu'il détecte beaucoup de lumière. Comme cela signifie qu'il doit mesurer la luminosité à tout moment, nous allons intégrer toute la programmation dans le bloc ``||basic: toujours||``.
Il nous faut un bloc ``||logic: si alors||`` pour indiquer au micro:bit de prendre une décision en fonction de la luminosité.
- Dans l'onglet ``||logic: Logique||``, fais glisser le bloc ``||logic: si vrai alors sinon||`` et insère-le dans le bloc ``||basic: toujours||``.

```blocks
basic.forever(function () {
    if (true) {  	
    } else {
    }
})
```

## Step 2
**Mesurer la luminosité**

Le micro:bit mesure la luminosité sur une échelle de 0 à 255. Il nous faut choisir un chiffre pour représenter la limite entre la clarté et l'obscurité. Commençons avec le chiffre 100. Tu pourras changer ce chiffre plus tard pour ajuster la sensibilité du capteur.
Si la mesure de la luminosité est supérieure à 100, le micro:bit fera une action, et si elle est inférieure à 100, alors il fera une autre action.
En mathématiques, on utilise les symboles <, = et > pour indiquer si un élément est plus petit que, égal ou plus grand que un autre élément. Le micro:bit comprend ces symboles.
- Dans l'onglet ``||logic: Logique||``, fais glisser le bloc ``||logic: (0) = (0)||`` et insère-le au-dessus du bloc ``||logic: vrai||``, dans le bloc ``||logic : si vrai alors sinon||``.
- Clique sur ``||logic: =||``, dans le bloc ``||logic: (0) = (0)||``, et change-le à ``||logic: >||``.
- Dans l'onglet ``||input: Entrées||``, fais glisser ``||input: niveau d'intensité lumineuse||`` et insère-le sur le 0, à gauche, dans le bloc ``||logic: (0) > (0)||``.
- Clique sur le 0, à droite, dans le bloc ``||logic: (0) > (0)||`` et tape 100.

```blocks
basic.forever(function () {
    if (input.lightLevel() > 100) {
    } else {   	
    }
})
```

## Step 3
**Afficher les résultats**

Nous allons indiquer au micro:bit d'afficher l'image d'un soleil lorsqu'il détecte de la clarté, et de ne rien afficher s'il ne détecte pas de clarté.

- Dans l'onglet ``||basic: Base||``, fais glisser le bloc ``||basic: montrer leds||`` et insère-le dans la première encoche, sous ``||logic : si alors||``.
- Dessine un symbole représentant le soleil en cliquant sur chacun des DEL, afin de les allumer ou de les éteindre.
- Dans l'onglet ``||basic: Base||``, fais glisser le bloc ``||basic: effacer l'écran||`` et insère-le sous ``||logic: sinon||``.

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


## Step 4
**Tester et télécharger**

Teste ton programme en faisant glisser de haut en bas le bouton de luminosité dans le coin supérieur gauche du micro:bit virtuel. 
- Si ça fonctionne comme prévu, télécharge le programme dans ton micro:bit et mets-le à l'essai!
- Couvre le micro:bit avec ta main, ou allume et éteins les lumières dans la pièce. Mets le micro:bit dans un tiroir ou une boîte, puis ouvre et ferme le tiroir ou la boîte. Pourrais-tu ajouter un haut-parleur et transformer le micro:bit en alarme?  
- Clique sur « Suivant » pour plus de suggestions sur la façon d'expérimenter davantage.

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

## Step 5
**Aller plus loin**  

Et si on voulait modifier le fonctionnement du capteur, pour qu'il détecte l'obscurité plutôt que la clarté? 
- Clique sur ``||logic: >||``, dans le bloc ``||logic: (0) > (0)||``, et change-le à ``||logic: <||``. Maintenant, c'est lorsque la luminosité est inférieure à notre limite fixée que le symbole du soleil apparaîtra.
Ce programme pourrait-il servir de feu de sécurité lorsque tu roules à vélo ou que tu marches dehors le soir? Comment pourrais-tu faire clignoter les lumières?
Et pourquoi pas un éclairage écoénergétique à la maison qui ne s'allume que lorsqu'on en a besoin? À quoi d'autre ce programme pourrait-il servir? 
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
