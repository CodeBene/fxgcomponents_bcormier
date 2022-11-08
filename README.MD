# Déploiement en continu
Le fichier .yml exécute un déploiement de composantes React qui peuvent être affichées sous forme de storybook. Ce déploiement se fait en 3 étapes: 

## Étape 1 : Version
 Incrémentation de la version du package et ajout de tags au Git. 
## Étape 2 : Publish
Publication du package de composantes sur npmjs.com.  
## Étape 3 : Deploy
Déploiement vers un serveur FTP.
# Activer le storybook de composantes React
1. -yarn <br>pour installer les dépendances du projet. 

2. -yarn storybook <br>pour démarrer le storybook qui s'ouvrira sur le http://localhost:6006/ dans le navigateur.

# Fonctionnement des composantes React
## Composant Alert
### args: 
* text (string) -> le texte que l'on veut afficher
* type (3 types d'Alert)
    * Success -> Background vert
    * Info -> Background bleu
    * Error -> Background rouge
--------------------------------------- 
## Composant Avatar
### args:
* size (number)
    * Small -> 30
    * Medium -> 60
    * Large -> 90
---------------------------------------
## Composant Badge
### args: 
* shape (string) 
* count (number) -> nombre de notifications affichées en rouge 
### Déclinaisons 
1. Square -> Carré avec un count de 5
2. Circle -> Cercle avec count de 99+
3. Square70 -> Carré avec count de 70 
-----------------------------------------------------
## Composant Button 
### args: 
* type (string)
* text (string)

### Déclinaisons
1. Primary -> Type Primary (Couleur bleue)
2. Default -> Même couleur que background
3. Dashed -> Type dashed (bordure en pointillé), même couleur que background et bordure en pointillé
-----------------------------------------
## Composant Card
### args: 
* title (string)
* bordered (bool) --> est à true par défaut, en le mettant à false, les bordures disparaîssent 
* hoverable (bool) --> ajoute un effet de survol, par défaut à false

### Déclinaisons

1. Basic
2. NoBorders -> bordered est à false
3. Hover -> hoverable est à true 
-------------------------------------------------------
## Empty
C'est un placeholder lorsque l'emplacement de la requête est vide. 

### args:
* image

### Déclinaisons
1. Basic -> affiche l'image d'un dossier avec un text "No Data"
2. WithImage - affiche l'image d'un chien avec des lunettes qui code derrière son ordinateur
3. Simple -> affiche l'image d'un dossier avec des couleurs plus pâles
-------------------------------------------------------
## Composant Input
### args:
* maxLength (number) -> nombre de caractères maximum que prend le Input
* placeholder (string)
* width (number) -> la largeur du input en % 

### Déclinaisons
1. Short -> Maximum 15 caractères, width 10% 
2. Medium -> Maximum 50 caractères, width 20%
3. Long -> Maximum 100 caractères, width 40%
-------------------------------------------------------
## Composant Rate
Affichage avec des étoiles pour attribuer une note sur 5.
### args
* allowHalf (bool) -> permet de sélectionner la moitié d'une étoile
* disabled (bool) -> Il devient impossible de sélectionner des étoiles
* defaultValue (number) -> Le nombre d'étoiles sélectionnées au chargement

### Déclinaisons 
1. Basic 
2. HalfStar -> On peut attribuer des demi-étoiles 
3. ReadOnly -> defaultValue de 2, les étoiles sont disabled
-----------------------------------------------------
## Composant Select
Menu déroulant de 3 items qui ouvre vers le bas

### args: 
* defaultValue (string) -> la valeur affichée quand le menu n'est pas ouvert
* value1 (string) -> Item 1
* value2 (string) -> Item 2
* value3 (string) -> Item 3
* bordered (bool) -> De base à true 
* status (string) -> possiblité d'afficher un statut d'erreur (couleur rouge)

### Déclinaisons 

1. DefaultDropdown 
2. NoBorder -> bordered est à false
3. Error -> Le statut est à 'error', la bordure du menu apparaît rouge
-------------------------------------------------------
## Typography
Différents styles de typographie

### args: 
* italic (bool) -> texte en italique
* strong (bool)-> texte en gras
* underline (bool)-> texte souligné

### Déclinaisons
1. Italic -> italic est à true
2. Strong -> strong est à true
3. Underline - underline est à true
-------------------------------------------------------