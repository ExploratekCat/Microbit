# Tutorial_French

## Étape 1 :
Bienvenue au tutoriel « Patate Chaude » du Musée des sciences et de la technologie du Canada.

Ce jeu nécessite 2 joueurs. Vous allez coder un objet qui est envoyé d'un micro:bit à un autre en le secouant, pendant qu'un compte à rebours est enclenché. 
Essaye de ne pas être en possession de la patate à la fin du compte à rebours. 



## Étape 2 :
Commençons par créer le contexte de ton activité :
- Il faut d'abord établir ce qui constitue la patate.
- Il faut ensuite connecter les dispositifs des deux joueurs.


1.	Dans l'onglet Variables, clique sur « Créer une variable ». Appelle-la ``||variable:potato||``.
2.	Fais glisser le bloc ``||Set variable to 0||`` et place-le sous le bloc de démarrage. Change le chiffre à -1.
3.	Dans l'onglet Radio, choisis le bloc ``||Radio radio group||``. Place-le sous le bloc « définir patate ».
4.	Change le chiffre à celui que ton enseignant ou enseignante t'a donné.

```blocks
let Potato = 0
Potato = -1
radio.setGroup(1)
``` 


## Étape 3 :
Définis l'action du joueur : si c'est toi qui as la patate, tu voudras l'envoyer à l'autre joueur. 
1.	Dans l'onglet Entrées, choisis et fais glisser le bloc « lorsque secouer ». Place-le sans le lier.
2.	Choisis le bloc ``||logic: if-true-then||`` dans l'onglet Logique.
3.	Place la variable``||variable:potato||``  sur « vrai » dans le bloc ``||logic: if-true-then||``.
4.	Dans l'onglet Radio, ajoute le bloc ``||radio: radio send number||`` en dessous du bloc « si Patate alors ». Ajoute une variable ``||variable:potato||`` dans le bloc Radio.
5.	Dans l'onglet Variables, choisis et fais glisser le bloc ``||variable:set potato to||`` en dessous du bloc « radio ». Change le chiffre à -1 .


```blocks 
input.onGesture(Gesture.Shake, function () {
    if (Potato) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
```

## Étape 4 :
Tu dois maintenant effectuer un réglage pour attraper la patate lorsque ton adversaire secoue son dispositif.
1.	Dans l'onglet Entrées, choisis ``||input: on button A pressed||`` et fais-le glisser, sans le lier.
2.	Va dans l'onglet Variables et insère le bloc ``||variable: set potato to 0||`` dans le bloc « lorsque le bouton A est pressé ».
3.	Dans l'onglet Maths, choisis le bloc ``||math: pick random 0 to 10||`` et insère-le dans le champ « 0 » puis change le tout à « 10 à 20  ».

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    Potato = receivedNumber
})
// Starts the game timer
input.onButtonPressed(Button.A, function () {
    Potato = randint(10, 20)
})
```


## Étape 5 :
Dans cette dernière étape, nous allons définir ce que fait la patate.
- 	Si la partie est terminée, l'écran perdant sera affiché. 
- 	Si le joueur n'a pas la patate, l'écran sera vide.
- 	Si le joueur a la patate, un décompte commencera.

1.	Dans l'onglet Base, fais glisser le bloc ``||basic: forever||``, sans le lier.
2.	Dans l'onglet Logique, emboîte un bloc ``||logic: if true then||``. Remplace la variable « vrai » par ``||logic: 0 = 0||``. Ajoute deux autres de ces blocs.
3.	Dans le premier bloc ``||logic: if-0-then||``, remplace le premier 0 par une variable ``||variable:potato||``.

```blocks
basic.forever(function () {
    if (Potato == 0) {
 if (Potato == 0) {
 if (Potato == 0) {
 ```


## Étape 6:
1. Choisis le bloc ``||basic: show icon||``  dans l'onglet Base et insère-le en dessous du premier bloc ``||logic: if potato = 0||``, puis choisis l'icône du crâne.
2. Dans l'onglet Base, fais glisser le bloc ``||basic: clear screen||`` et insère-le sous le deuxième bloc ``||Logic:if then||``. Change le 0 à -1.
2. Dans le troisième bloc ``||logic: if then||``, change le ``||logic: ""=""||``à ``||logic: "">""||``.
3. Dans l'onglet Base, fais glisser un bloc ``||basic: show icon||`` pour l'insérer sous le troisième bloc ``||logic: if-then||`` puis choisis l'icône qui te fait penser à une patate.
4. Dans l'onglet Variables, ajoute un bloc ``||variables: change potato by 1||`` puis modifie le chiffre à -1 .


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

## Étape 7 :
Félicitations, tu as réussi la programmation de ton jeu Patate chaude, maintenant il est temps de jouer! 
- Télécharge ta programmation en la sauvegardant sur un disque local.
- Fais glisser ton fichier .hex sauvegardé vers ton micro:bit (assure-toi qu'il est relié par connexion USB).
- Débranchez le micro:bit de l'ordinateur et ajoutez le bloc-piles.
- Essayez-le contre un autre joueur qui possède également un micro:bit codé dans le même groupe radio.
- Pourrais-tu ajouter un troisième ou quatrième joueur?

