// let a = 4
// let b = 4
// let c = 2

// if( a == b ){
//     console.log("c'est égal")
// }

// if(c<b && a+c!=3){
//     console.log("ok")
// }else{
//     console.log("raté")
// }
//
//let a = "3"
//let b = 4
//
//switch(a) {
//    case 3:
//        console.log("c'est 3")
//        break
//    case 4:
//        console("c'est 4")
//        break
//    case "Noah est cool":
//        console.log("Nono le boss")
//        break
//    default:
//        console.log("y'a rien wsh")
//}

//let a = 4
//let b = 4
//let c = 3
//
//switch (a){
//   case b:
//       console.log("égal à b")
//       break
//   case c:
//       console.log("égal à c")
//       break
//   default:
//       console.log("égal à rien")
//
//}

//for(let i = 0; i < 10; i++){
//    console.log(i)
//}
//
//let a =12
//for(let b = 1; b<=a; b++){
//    console.log("wsh")
//}


//let i = Object
//
//while(i<10){
//    console.log(i)
//    i++
//}

//let a = 3
//
//while( a < 9 ){
//    a++
//    if( a == 8 ) break
//    if( a == 7 ) continue
//    console.log(a)
//}

//let a = 3
//let b = 4
//
//a == b ? console.log('vrai') : console.log('faux')


//let a = "Jean"
//let b = "Paul"
//let result = checkName(a,b)
//
//function checkName(x, y){
//    return x===y
//}
//console.log(result)


//let sports = [
//    "foot",
//    "basket",
//    "tennis"
//]
//
////console.log(sports[0])
////
//sports.push('pétanque')
////
////sports.splice(2,1)
////
////console.log(sports)
//
//sports.forEach((sport)=>{
//    console.log(sport)
//})


//let names = []
//
//names.push('Vincent', 'Paulo', 'Arthur')
//
//console.log(names)
//
//
//names.forEach((name)=>{
//    console.log(name + ' va à la pêche encule')
//})


//let student = {
//    name: 'Noah',
//    age:19,
//    city:'Paris'
//}

//let longueur = student.name.length + student.age.length + student.city.length
//
//
//if (longueur%2 ===0 ){
//    console.log('pair')
//} else{
//    console.log('impair ma gueule')
//}

//let count = null
//
//for(let value in student){
//    let caracters = student[value].toString().length
//    count += caracters
//}
//
//count % 2 == 0 ? console.log(count + ' is pair') : console.log(count + ' is impair')


//class Student {
//    constructor(name, html, css, javascript, php){
//        this.name = name
//        this.html = html
//        this.css = css
//        this.javascript = javascript
//        this.php = php
//    }
//
//    getPHPLevel(){
//        console.log(this.name + ' a ' + this.php + '/5 en PHP')
//    }
//
//
//}
//
//let michel = new Student("Michel", 5, 4, 1, 3)
//let nicolas = new Student("Nicolas", 5, 5, 5, 5)
//
//michel.getPHPLevel()