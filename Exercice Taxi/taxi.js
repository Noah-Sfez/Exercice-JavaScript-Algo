let Personnage = {
    name: 'John',
    health: 10,
}

let musiques = ['Anissa - Wejdene', 'Billie jean - Michael Jackson', 'Talking to the Moon - Bruno mars', 'de la merde - Wejdene', 'pas ouf - Wejdene']


for(let feux = 30; feux>=0; feux--  ){
    let musiquealea = musiques[Math.floor(Math.random()*5)]
    console.log(musiquealea + " passe à la radio...")
    if(musiquealea === "Anissa - Wejdene"){
        console.log("éteins moi cette musique de merde !")
        Personnage.health --
        console.log("La santé mentale de " + Personnage.name + " est à " + Personnage.health)
    }
    console.log(feux + " feux")
    if(feux == 0 && Personnage.health > 0){
        let changements = 10 - Personnage.health
        console.log("Il lui aura fallu " + changements + " changements pour arriver à destination")
    }else if(Personnage.health ==0){
        console.log("Explosion")
        break
    } else {
        continue
    }
}