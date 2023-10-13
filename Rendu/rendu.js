

let victoireAttaquant = 0
let victoireDefenseur = 0


while(victoireAttaquant<=13 &&  victoireDefenseur<=13){
    if(victoireAttaquant == 13 || victoireDefenseur == 13){
        if(victoireAttaquant == 13){
            console.log("Les attaquants ont gagné la partie!")
        } else if(victoireDefenseur == 13) {
            console.log("Les défenseurs ont gagné la partie !")
        }
        console.log("FIN DE LA PARTIE")
        break
    }

    let attaquant = []
    let defenseur = []

    defenseur.push(
        {name:'Omen', caracteristique:'smoker'},
        {name:'Phoenix', caracteristique:'flasher'},
        {name:'Jett', caracteristique:'killer'},
        {name:'Fade', caracteristique:''},
        {name:'Chamber', caracteristique:''}
    )
    attaquant.push(
        {name:'Omen', caracteristique:'smoker'},
        {name:'Phoenix', caracteristique:'flasher'},
        {name:'Jett', caracteristique:'killer'},
        {name:'Fade', caracteristique:''},
        {name:'Chamber', caracteristique:''}
    )


    let attaquantNombreAleatoire = Math.floor(Math.random() * attaquant.length)
    let attaquantFirstAleatoire = attaquant[attaquantNombreAleatoire]


    let defenseurNombreAleatoire = Math.floor(Math.random() * defenseur.length)
    let defenseurFirstAleatoire = defenseur[defenseurNombreAleatoire]

    console.log("Début de la partie :")
    console.log(attaquantFirstAleatoire.name + " et " + defenseurFirstAleatoire.name + " se rencontrent !")

    let probaFirstDieAttaquant = Math.random()
    let probaFirstDieDefenseur = Math.random()

    if(probaFirstDieAttaquant>probaFirstDieDefenseur){
        console.log(defenseurFirstAleatoire.name + ", notre défenseur, est mort...")
        defenseur.splice(defenseurNombreAleatoire, 1)
        let probaSpike = 0.6
        if(probaSpike>Math.random()){
            console.log("Le spike est amorcé")
            let probaWinDuelAttaquant = 0.7
            let probaWinDuelDefenseur = 0.3
            while(defenseur.length != 0 || attaquant.length != 0){
                let attaquantNumber = [Math.floor(Math.random() * attaquant.length)]
                let defenseurNumber = [Math.floor(Math.random() * defenseur.length)]
                let attaquantAleatoire = attaquant[attaquantNumber]
                let defenseurAleatoire = defenseur[defenseurNumber]
                console.log(attaquantAleatoire.name + " et " + defenseurAleatoire.name + " se recontrent !")
                if(probaWinDuelAttaquant>Math.random()){
                    console.log(attaquantAleatoire.name + " a gagné, un défenseur de moins")
                    defenseur.splice(defenseurNumber, 1)
                } else {
                    console.log(defenseurAleatoire.name + " a gagné, un attaquant de moins")
                    attaquant.splice(attaquantNumber, 1)
                }
                if (defenseur.length == 0) {
                    console.log("Les défenseurs ont perdu")
                    victoireAttaquant++
                    console.log("Les attaquants ont gagné " + victoireAttaquant + " fois !")
                    break
                } else if(attaquant.length == 0){
                    console.log("Les attaquants ont perdu")
                    victoireDefenseur++
                    console.log("Les défenseurs ont gagné " + victoireDefenseur + " fois !")
                    break
                }
            }
        } else {
            console.log("Le spike n'est pas amorcé")
            let probaWinDuelAttaquant = 0.5
            let probaWinDuelDefenseur = 0.5
            while(defenseur.length != 0 || attaquant.length != 0){
                let attaquantNumber = [Math.floor(Math.random() * attaquant.length)]
                let defenseurNumber = [Math.floor(Math.random() * defenseur.length)]
                let attaquantAleatoire = attaquant[attaquantNumber]
                let defenseurAleatoire = defenseur[defenseurNumber]
                console.log(attaquantAleatoire.name + " et " + defenseurAleatoire.name + " se recontrent !")
                if(probaWinDuelAttaquant>Math.random()){
                    console.log(attaquantAleatoire.name + " a gagné, un défenseur de moins")
                    defenseur.splice(defenseurNumber, 1)
                } else {
                    console.log(defenseurAleatoire.name + " a gagné, un attaquant de moins")
                    attaquant.splice(attaquantNumber, 1)
                }
                if (defenseur.length == 0) {
                    console.log("Les défenseurs ont perdu")
                    victoireAttaquant++
                    console.log("Les attaquants ont gagné " + victoireAttaquant + " fois !")
                    break
                } else if(attaquant.length == 0){
                    console.log("Les attaquants ont perdu")
                    victoireDefenseur++
                    console.log("Les défenseurs ont gagné " + victoireDefenseur + " fois !")
                    break
                }
            }
        }
    } else{
        console.log(attaquantFirstAleatoire.name + " est mort...")
        attaquant.splice(attaquantNombreAleatoire, 1)
        let probaSpike = 0.4
        if(probaSpike>Math.random()){
            console.log("Le spike est amorcé")
            let probaWinDuelAttaquant = 0.7
            let probaWinDuelDefenseur = 0.3
            while(defenseur.length != 0 || attaquant.length != 0){
                let attaquantNumber = [Math.floor(Math.random() * attaquant.length)]
                let defenseurNumber = [Math.floor(Math.random() * defenseur.length)]
                let attaquantAleatoire = attaquant[attaquantNumber]
                let defenseurAleatoire = defenseur[defenseurNumber]
                console.log(attaquantAleatoire.name + " et " + defenseurAleatoire.name + " se recontrent !")
                if(probaWinDuelAttaquant>Math.random()){
                    console.log(attaquantAleatoire.name + " a gagné, un défenseur de moins")
                    defenseur.splice(defenseurNumber, 1)
                } else {
                    console.log(defenseurAleatoire.name + " a gagné, un attaquant de moins")
                    attaquant.splice(attaquantNumber, 1)
                }
                if (defenseur.length == 0) {
                    console.log("Les défenseurs ont perdu")
                    victoireAttaquant++
                    console.log("Les attaquants ont gagné " + victoireAttaquant + " fois !")
                    break
                } else if(attaquant.length == 0){
                    console.log("Les attaquants ont perdu")
                    victoireDefenseur++
                    console.log("Les défenseurs ont gagné " + victoireDefenseur + " fois !")
                    break
                }
            }
        }else{
            console.log("Le spike n'est pas amorcé")
            let probaWinDuelAttaquant = 0.5
            let probaWinDuelDefenseur = 0.5
            while(defenseur.length != 0 || attaquant.length != 0){
                let attaquantNumber = [Math.floor(Math.random() * attaquant.length)]
                let defenseurNumber = [Math.floor(Math.random() * defenseur.length)]
                let attaquantAleatoire = attaquant[attaquantNumber]
                let defenseurAleatoire = defenseur[defenseurNumber]
                console.log(attaquantAleatoire.name + " et " + defenseurAleatoire.name + " se recontrent !")
                if(probaWinDuelAttaquant>Math.random()){
                    console.log(attaquantAleatoire.name + " a gagné, un défenseur de moins")
                    defenseur.splice(defenseurNumber, 1)
                } else {
                    console.log(defenseurAleatoire.name + " a gagné, un attaquant de moins")
                    attaquant.splice(attaquantNumber, 1)
                }
                if (defenseur.length == 0) {
                    console.log("Les défenseurs ont perdu")
                    victoireAttaquant++
                    console.log("Les attaquants ont gagné " + victoireAttaquant + " fois !")
                    break
                } else if(attaquant.length == 0){
                    console.log("Les attaquants ont perdu")
                    victoireDefenseur++
                    console.log("Les défenseurs ont gagné " + victoireDefenseur + " fois !")
                    break
                }
            }
        }
    }
} 

