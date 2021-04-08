# Tutorial_French

## Étape 1 :
Bienvenue au tutoriel **« Patate Chaude »** du Musée des sciences et de la technologie du Canada.

Ce jeu nécessite 2 joueurs. Vous allez coder un objet qui est envoyé d'un micro:bit à un autre en le secouant, pendant qu'un compte à rebours est enclenché. 
Essaye de ne pas être en possession de la patate à la fin du compte à rebours. 



## Étape 2 :
**Crée le contexte de ton activité**

- Il faut d'abord établir ce qui constitue la patate.
- Il faut ensuite connecter les dispositifs des deux joueurs.


1.	Dans l'onglet ``|| Variables ||``, clique sur « Créer une variable ». Appelle-la ``||variable:patate||``.
2.	Fais glisser le bloc ``||variable: définir patate à 0||`` et place-le sous le bloc de démarrage ``|| Basic: au démarrage||``. Change le chiffre à -1.
3.	Dans l'onglet ``|| Radio ||``, choisis le bloc ``||radio: radio définir groupe||``. Place-le sous le bloc ``||variable: définir patate à 0||``.
4.	Change le chiffre à celui que ton enseignant ou enseignante t'a donné.

```blocks
let Potato = 0
Potato = -1
radio.setGroup(1)
``` 


## Étape 3 :
**Définis l'action du joueur**

Si c'est toi qui as la patate, tu voudras l'envoyer à l'autre joueur. 
1.	Dans l'onglet ``|| Entrées||``, choisis et fais glisser le bloc ``|| Entrées: lorsque secouer||``. Place-le sans le lier.
2.	Choisis le bloc ``||logic: si vrai alors ||`` dans l'onglet Logique.
3.	Place la variable``||variable: patate||``  sur « vrai » dans le bloc ``||logic: si vrai alors||``.
4.	Dans l'onglet ``|| Radio ||``, ajoute le bloc ``||radio: envoyerle nombre 0 par radio||`` en dessous du bloc « si Patate alors ». Ajoute une variable ``||variable: patate||`` dans le bloc Radio.
5.	Dans l'onglet ``|| Variables ||``, choisis et fais glisser le bloc ``||variable: définir patate à 0||`` en dessous du bloc ``|| radio ||``. Change le chiffre à -1 .


```blocks 
input.onGesture(Gesture.Shake, function () {
    if (Potato) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
```

## Étape 4 :
**Lance la patate**

Tu dois maintenant effectuer un réglage pour attraper la patate lorsque ton adversaire secoue son dispositif.
1. Dans l'onglet Entrées, choisis ``||input: lorsque le bouton A est pressé||`` et fais-le glisser, sans le lier.
2. Va dans l'onglet Variables et insère le bloc ``||variable: définir patate à 0||`` juste en dessous.
3. Dans l'onglet Maths, choisis le bloc ``||math: choisir au hasard de 0 à 10||`` et insère-le dans le champ « 0 » puis change le tout à « 10 à 20  ».
4. Va dans l'onglet ``||radio||``  et ajoute le bloc ``||radio: quand une donnée est reçue par radio ReceivedNumber||`` dans l'espace sans le lier. 
5. Ajoute le bloc ``||variable: définir patate à 0||`` de l'onglet ``||variable||`` juste en dessous, puis fait glisser l'icone ``||receivedNumber||`` dans ce nouveau bloc pour remplacer le 0. 

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    Potato = receivedNumber
})
// Starts the game timer
input.onButtonPressed(Button.A, function () {
    Potato = randint(10, 20)
})
```


## Étape 5
**Défini ce que fait la patate** 

- 	Si la partie est terminée, l'écran perdant sera affiché. 
- 	Si le joueur n'a pas la patate, l'écran sera vide.
- 	Si le joueur a la patate, un décompte commencera.

1.	Dans l'onglet Base, fais glisser le bloc ``||basic: toujours||``, sans le lier.
2.	Dans l'onglet Logique, emboîte un bloc ``||logic: si vrai alors||``. Remplace la variable « vrai » par ``||logic: 0 = 0||``. Ajoute deux autres de ces blocs.
3.	Dans le premier bloc ``||logic: si-0-alors||``, remplace le premier 0 par une variable ``||variable: patate||``.

```blocks
basic.forever(function () {
    if (Potato == 0) {
 if (Potato == 0) {
 if (Potato == 0) {
 ```


## Étape 6
**Ajoute des symboles de jeu**

1. Choisis le bloc ``||basic: showIcon(showIcon.Skull)||``  dans l'onglet Base et insère-le en dessous du premier bloc ``||logic: si patate = 0||``, puis choisis l'icône du crâne.
2. Dans l'onglet Base, fais glisser le bloc ``||basic: effacer l'écran||`` et insère-le sous le deuxième bloc ``||Logic: si alors ||``. Change le 0 à -1.
2. Dans le troisième bloc ``||logic: si alors||``, change le ``||logic: ""=""||``à ``||logic: "">""||``.
3. Dans l'onglet Base, fais glisser un bloc ``||basic: showIcon(showIcon.Target)||`` pour l'insérer sous le troisième bloc ``||logic: si alors||`` puis choisis l'icône qui te fait penser à une patate.
4. Dans l'onglet Variables, ajoute un bloc ``||variables: modifier patate de 1||`` puis modifie le chiffre à -1 .


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

