// ## Exo 1 
// ### Créez un objet avec vos valeurs
// ### 'Nom', 'prenom', 'age', 'taille'
// ### Affichez votre age via un console.log()

let charles = {
    nom : "de Lalaing",
    prenom : "Charles",
    âge : 22,
    taille : 193 + "cm",
}

console.log(charles);

// ## Exo 2 
// ### Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

let cactus = {
    nom : "Abderrahim",
    prenom : "Cactus",
    âge : 27,
    taille : 175 + "cm",
}

console.log(cactus);

let inconnu = {

}

// ## Exo 3
// ### Remplir les propriétées du 3eme personnage
// ### Son nom doit valoir le nom du personnage1
// ### Son age doit valoir celui du personnage2
// ### Et sa taille doit être rempli avec la valeur que vous souhaitez

inconnu.nom = charles.nom;
inconnu.prenom = "perdu";
inconnu.âge = cactus.âge;
inconnu.taille = 112 + "cm";

console.log(inconnu);
