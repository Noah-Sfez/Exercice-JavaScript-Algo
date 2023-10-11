let Tueur = {
    name: 'Jason',
    pdv: 100,
}

let caracteristiques = [
    {surname:'Nerd', probaDeath: 0.5, probaDegats: 0.3, probaDeathAndDegats: 0.2},
    {surname:'Sportif', probaDeath: 0.4, probaDegats: 0.5, probaDeathAndDegats: 0.3},
    {surname:'Blonde', probaDeath: 0.6, probaDegats: 0.2, probaDeathAndDegats: 0.1},
    {surname:'Flic', probaDeath: 0.3, probaDegats: 0.5, probaDeathAndDegats: 0.3},
    {surname:'Hacker', probaDeath: 0.01, probaDegats: 0.9, probaDeathAndDegats: 0.01}
]

let prenom = ['Hermione', 'Antoine', 'Dimitri', 'Timothée', 'Noah', 'Léo', 'Aurore',
'Sophie', 'Lucas', 'Emily', 'Oliver', 'Isabella', 'Ethan', 'Mia',
'Liam', 'Zoe', 'Emma', 'Mason', 'Olivia', 'Ava', 'Charlotte', 'Amelia',
'Harper', 'Evelyn', 'Abigail', 'Emily', 'Elizabeth', 'Sofia', 'Avery',
'Ella', 'Scarlett', 'Grace', 'Chloe', 'Victoria', 'Riley', 'Aria', 'Nicolas']

let survivants = [];

for (let i = 0; i < 5; i++) {
    let randomName = Math.floor(Math.random() * prenom.length);
    let randomChar = Math.floor(Math.random() * caracteristiques.length);

    let survivant = {
        name: prenom[randomName],
        characteristic: caracteristiques[randomChar]
    };

    survivants.push(survivant);
}


let morts = []
console.log("Que la chasse commence !")
while (Tueur.pdv > 0 && survivants.length > 0){
    let survivantAleatoire = Math.floor(Math.random() * survivants.length)
    let survivant = survivants[survivantAleatoire]

    let nombreAleatoire = Math.random()
    if (nombreAleatoire < survivant.characteristic.probaDeath){
        console.log(Tueur.name + " a brûlé " + survivant.name)
        morts.push(survivant.name)
        survivants.splice(nombreAleatoire, 1)
    }else if (nombreAleatoire < survivant.characteristic.probaDeath + survivant.characteristic.probaDegats){
        console.log(survivant.name + " a esquivé l'attaque et a infligé 10 pts de dégats !")
        Tueur.pdv -= 10
    } else {
        console.log(survivant.name + " a infligé 15 pts de dégats mais est mort one shot...")
        Tueur.pdv -= 15
        morts.push(survivant.name)
        survivants.splice(nombreAleatoire, 1)
    }
}

if (Tueur.pdv <= 0){
    console.log(Tueur.name + " est mort. Les survivants ont survécu !")
} else {
    console.log(Tueur.name + " a déglingué tout le monde")
}

if (morts.length > 0) {
    console.log("RIP à " + morts.join(', '))
}