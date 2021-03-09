# Tutorial_French

## Étape 1 :
Commençons par créer le contexte de ton activité :
- Il faut d'abord établir ce qui constitue la patate.
- Il faut ensuite connecter les dispositifs des deux joueurs.


1.	Dans l'onglet Variables, clique sur « Créer une variable ». Appelle-la « Patate ».
2.	Fais glisser le bloc « définir Patate à 0 » et place-le sous le bloc de démarrage. Change le chiffre à -1.
3.	Dans l'onglet Radio, choisis le bloc « radio définir groupe ». Place-le sous le bloc « définir patate ».
4.	Change le chiffre à celui que ton enseignant ou enseignante t'a donné.

```blocks
let Potato = 0
Potato = -1
radio.setGroup(1)
``` 


## Étape 2 :
Définis l'action du joueur : si c'est toi qui as la patate, tu voudras l'envoyer à l'autre joueur. 
1.	Dans l'onglet Entrées, choisis et fais glisser le bloc « lorsque secouer ». Place-le sans le lier.
2.	Choisis le bloc « si vrai alors » dans l'onglet Logique.
3.	Place la variable Patate sur « vrai » dans le bloc « si vrai alors ».
4.	Dans l'onglet Radio, ajoute le bloc « envoyer le nombre __ par radio » en dessous du bloc « si Patate alors ». Ajoute une variable Patate dans le bloc Radio.
5.	Dans l'onglet Variables, choisis et fais glisser le bloc « définir Patate à » en dessous du bloc « radio ». Change le chiffre à -1 .


```blocks 
input.onGesture(Gesture.Shake, function () {
    if (Potato) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
```

## Étape 3 :
Tu dois maintenant effectuer un réglage pour attraper la patate lorsque ton adversaire secoue son dispositif.
1.	Dans l'onglet Entrées, choisis « lorsque le bouton A est pressé » et fais-le glisser, sans le lier.
2.	Va dans l'onglet Variables et insère le bloc « définir Patate à » dans le bloc « lorsque le bouton A est pressé ».
3.	Dans l'onglet Maths, choisis le bloc « au hasard de 0 à 10 » et insère-le dans le champ « 0 » puis change le tout à « 10 à 20  ».

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    Potato = receivedNumber
})
// Starts the game timer
input.onButtonPressed(Button.A, function () {
    Potato = randint(10, 20)
})
```


## Étape 4 :
Dans cette dernière étape, nous allons définir ce que fait la patate.
●	Si la partie est terminée, l'écran perdant sera affiché. 
●	Si le joueur n'a pas la patate, l'écran sera vide.
●	Si le joueur a la patate, un décompte commencera.
1.	Dans l'onglet Base, fais glisser le bloc « toujours », sans le lier.
2.	Dans l'onglet Logique, emboîte un bloc « si vrai alors ». Remplace la variable « vrai » par « 0 = 0 ». Ajoute deux autres de ces blocs.
3.	Dans le premier bloc « si __ alors », remplace le premier 0 par une variable Patate.
4.	Choisis le bloc « montrer l'icône » dans l'onglet Base et insère-le en dessous du premier bloc « si Patate = 0 », puis choisis l'icône du crâne.
5.	Dans l'onglet Base, fais glisser le bloc « effacer l'écran » et insère-le sous le deuxième bloc « si __ alors ». Change le 0 à -1.
6.	Dans le troisième bloc « si __ alors », change le symbole = à >.
7.	Dans l'onglet Base, fais glisser un bloc « montrer l'icône » pour l'insérer sous le troisième bloc « si __ alors » puis choisis l'icône qui te fait penser à une patate.
8.	Dans l'onglet Variables, ajoute un bloc « modifier Patate de 1 » puis modifie le chiffre à -1 .


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

## Étape 5 :
Félicitations, tu as réussi la programmation de ton jeu Patate chaude, maintenant il est temps de jouer! 
●	Télécharge ta programmation en la sauvegardant sur 
