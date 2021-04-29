let charles = {
    nom : "de Lalaing",
    prenom : "Charles",
    âge : 22 + " ans",
    taille : 193 + " cm",
    vitesse : 3.5 + " km/h",
    sport : "Football",

    genial(){
        console.log(`Quand ${this.nom} partique le ${this.sport}, il atteint une vitesse de ${this.vitesse} ce qui n'est franchement pas fifou`.toUpperCase());
    }
}
charles.rire = "drôle";
console.log(charles);



let felix = {
    nom : "Yves",
    prenom : "Felix",
    âge : 23 + " ans",
    taille : 188 + " cm",
    rtt : true,
    skiff : "il en est capable",
    alcol : "grodon",
    meuf : "+"+18,
    habitation : "cave",
    vin : "rouge",
    trackmania : "pro"
}

console.log(felix);