class Pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    getIsLucky(){
        let random = Math.random()
        if(this.luck > random){
            return true 
        } else {
            return false
        } 
    }
    getAttackPokemon(pokemon1, pokemon2){
       let degats = pokemon1.attack - pokemon2.defense
       console.log(this.name + " a infligé " + degats + " de dégats")
       pokemon2.hp = pokemon2.hp - degats
       if(pokemon2.hp > 0){
        console.log(pokemon2.name + " a " + pokemon2.hp + " hp")
       }else{
        console.log(pokemon2.name + " a 0 hp !")
       }
    }

}

let pikachu = new Pokemon("pikachu", 30, 17, 90, 0.5)
let dracaufeu = new Pokemon ("Dracaufeu", 45, 25, 130, 0.7)

while (pikachu.hp>0 && dracaufeu.hp > 0){
    if (pikachu.getIsLucky(true)){
        console.log ("Pikachu attaque")
        pikachu.getAttackPokemon(pikachu, dracaufeu)

    } else {
        console.log("Pikachu n'attaque pas")
    }
    if (dracaufeu.hp<=0){
        console.log("Dracaufeu est malheureusement K-O, Pikachu a gagné")
        break
    }
    if (dracaufeu.getIsLucky(true)){
        console.log("dracaufeu attaque")
        dracaufeu.getAttackPokemon(dracaufeu, pikachu)
        
    } else {
        console.log("Dracaufeu n'attaque pas")
    }
    if (pikachu.hp<=0){
        console.log("Pikachu est malheureusement K-O, Dracaufeu a gagné")
        break
    }
}


