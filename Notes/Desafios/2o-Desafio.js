// Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let saldo = saldoRanked(30, 15)

let nivel = verificarNivel(saldo)

console.log("O herói tem um saldo de " + saldo + " vitórias e esta no nível de " + nivel   )



function saldoRanked(vitorias, derrotas){

    let sub = vitorias - derrotas;
    return sub
}

function verificarNivel(verificar){
    let nivel = " "
    if (verificar <= 10){
        nivel = "Ferro"
    }
    else if(verificar > 10 && verificar <=20 ){
        nivel = "Bronze"
    }
    else if(verificar > 20 && verificar <=50 ){
        nivel = "Ouro"
    }
    else if(verificar > 50 && verificar <=80 ){
        nivel = "Diamante"
    }   
    else if(verificar > 80 && verificar <=90 ){
        nivel = "Lendário"
    }
    else if(verificar > 90 && verificar <=100 ){
        nivel = "Imortal"
    }
    else if(verificar >= 100 ){
        nivel = "Ferro"
    }
    
    return nivel

}

