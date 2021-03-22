# Compteur de pas
## Intro

Bienvenue au tutoriel « Compteur de pas» du Musée des sciences et de la technologie du Canada.
Le but de cette activité est d'apprendre des fonctions de base du micro:bit en créant un dispositif tout simple qui sera capable de compter tes pas. 


## Étape 1
**Créer une variable**
 
D'abord, il faut apprendre au micro:bit à compter en lui indiquant où garder en mémoire le nombre de pas qu'il détecte.
Dans l'onglet ``||variables: Variables||``, clique sur ``||Créer une variable||`` et nomme la variable ``||variables: pas||``.
- Dans l'onglet ``||variables: Variables||``, fais glisser le bloc ``||variables: définir pas à (0)||`` et insère-le dans le bloc ``||basic: au démarrage||``.
```blocks
let steps = 0
```


## Étape 2
**Commencer à compter**

Maintenant, il faut programmer le micro:bit pour qu'il ajoute un pas chaque fois qu'il détecte un secouement. 
- Dans l'onglet ``||input: Entrées||``, fais glisser le bloc ``||input: lorsque secouer||``.
- Dans l'onglet ``||variables: Variables||``, fais glisser le bloc ``||variables: modifier pas de (1)||`` et insère-le dans le bloc ``||input: lorsque secouer||``.
```blocks
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
```


## Étape 3
**Afficher les pas**

Maintenant, il faut demander au micro:bit de nous montrer combien de pas il a comptés en affichant un chiffre au moyen de ses DEL.
- Dans l'onglet ``||basic: Base||``, fais glisser le bloc ``||basic: montrer nombre (0)||`` et insère-le dans le bloc ``||input: lorsque secouer ||``, sous ``||variables: modifier pas de (1)||``.
- Dans l'onglet ``||variables: Variables||``, fais glisser ``||variables: pas||`` et insère-le au-dessus du 0, dans le bloc ``||basic: montrer nombre (0)||``.

```blocks
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
```

## Étape 4
**Tester le programme**

Teste maintenant ton programme au moyen du bouton « Secouer » du micro:bit virtuel. 
S'il fonctionne comme prévu, télécharge-le dans ton micro:bit, ajoute le bloc-pile et commence à marcher! 
Pour voir des suggestions pour améliorer ton compteur de pas, clique sur « Suivant ».


## Étape 5
**Aller plus loin**

Beaucoup de compteurs de pas (podomètres) permettent de fixer un objectif de nombre de pas à atteindre. Il te faudra des blocs ``||logic: Logique||`` pour comparer ton compte réel à ton objectif.
À toi de choisir ce qui se passe lorsque tu atteins ton objectif. Tu peux utiliser les blocs ``||music: Musique||`` pour que le micro:bit joue une mélodie, ou les blocs ``||basic: Base||`` pour qu'il affiche une image. Fais des expériences et personnalise ton programme!
(Conseil : utilise un petit nombre de pas comme objectif pour effectuer tes essais, sans quoi tu devras faire beaucoup de pas avant de voir ce qui se passe lorsque tu atteins ton objectif!)
```blocks
basic.forever(function () {
    if (steps == 10) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Heart)
    }
})
```

