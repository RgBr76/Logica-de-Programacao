let hero = "Champion1"
let XPHero = 900
let nivel

switch(true){
    case XPHero <=1000:
        nivel = "Ferro";
        break;
    case XPHero > 1000 && XPHero <=2000 :
        nivel = "Bronze";
        break;
    case XPHero > 2000 && XPHero <=5000 :
        nivel = "Prata";
        break;
    case XPHero > 5000 && XPHero <=7000 :
        nivel = "Ouro";
        break;
    case XPHero > 7000 && XPHero <=8000 :
        nivel = "Platina";
        break;
    case XPHero > 8000 && XPHero <=9000 :
        nivel = "Ascendente";
        break;
    case XPHero > 9000 && XPHero <=10000 :
        nivel = "Imortal";
        break;
    case XPHero > 10000 :
        nivel = "Radiante";
        break;
    default:
        console.log("Esse nível não existe");
        nivel = "Inexistente"
        break;
}

console.log('O nome do herói é'+ hero+' e seu nível é '+ nivel)





