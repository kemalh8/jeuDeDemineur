# jeuDeDemineur 

Structure de base et le formulaire de démarrage :
L'inclusion des scripts JavaScript :
L'inclusion de la feuille de style CSS :
L'inclusion de la bibliothèque Bootstrap :
DisplayGameGrid et updateUi

revealCell(event) : Cette fonction gère l'événement de clic sur une cellule. Elle obtient la valeur de la cellule cliquée à partir de l'attribut data-value. Si la valeur est '1', cela signifie qu'une mine a été cliquée et le jeu se termine. Sinon, la fonction gère la révélation de la cellule et appelle calculateAdjacentMines pour déterminer le nombre de mines adjacentes. Si le nombre est nul, elle appelle revealAdjacentCells pour révéler les cellules adjacentes.

calculateAdjacentMines(cell, gridData, cols) : Cette fonction calcule le nombre de mines adjacentes à une cellule donnée. Elle parcourt les cellules adjacentes dans une fenêtre 3x3 autour de la cellule actuelle et incrémente le compteur si une mine est trouvée.

revealAdjacentCells(cell, gridData, cols) : Cette fonction révèle les cellules adjacentes à la cellule donnée si elles sont vides (valeur '0') et n'ont pas déjà été révélées.

checkGameStatus(gridData, cols) : Cette fonction vérifie si le jeu est gagné ou en cours. Elle compte le nombre total de cellules révélées et le compare au nombre total de cellules moins le nombre total de mines. Si ces deux valeurs sont égales, le jeu est gagné.

fetchData(rows, cols, mines) : Cette fonction effectue l'appel API pour obtenir les données de la grille. Elle utilise la structure try...catch pour gérer les erreurs d'appel API. Si la réponse n'est pas OK, une erreur est lancée. Sinon, les données de la grille sont renvoyées. Si une erreur se produit, elle est affichée dans la console et une alerte est affichée à l'utilisateur.

Ajouter une validation des entrées utilisateur pour assurer que les valeurs sont valides et positives.
Utiliser la fonction fetchData de gameLogic.js pour récupérer les données du jeu en fonction des entrées fournies.
Utiliser la fonction displayGameGrid de uiFunctions.js pour afficher la grille du jeu dans l'interface utilisateur.
Utiliser la fonction updateUI de uiFunctions.js pour mettre à jour les informations du joueur et le nombre de mines restantes.
Attacher des gestionnaires d'événements de clic aux cellules en utilisant la fonction handleCellClick dans script.js. Cette fonction gère les actions lorsque le joueur clique sur une cellule.
Implémenter la logique de gestion des clics de cellule, y compris la vérification de la valeur de la cellule, la révélation des cellules adjacentes et la vérification de la condition de victoire.
