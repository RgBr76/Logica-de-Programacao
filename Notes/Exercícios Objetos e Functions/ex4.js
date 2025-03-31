// Exercício 5: Calculadora de Média de Notas

// Variáveis: Crie algumas variáveis para guardar as notas de um aluno em diferentes matérias (por exemplo: nota_portugues, nota_matematica, nota_historia). Escolha pelo menos 3 matérias.
// Função: Faça uma função chamada calcular_media que receba essas notas como informações e calcule a média aritmética do aluno (some todas as notas e divida pelo número de matérias). A função deve retornar o valor da média.
// Objeto: Crie um objeto chamado boletim para guardar as notas de todas as matérias que você definiu nas variáveis do item 1. Use os nomes das matérias como as "etiquetas" dentro do objeto, e as notas como os valores.
// Chamada da Função: Use a função calcular_media, passando como informações as notas que estão dentro do seu objeto boletim. Você vai precisar pegar cada nota do objeto para enviar para a função.
// Resultado: Mostre na tela uma frase que diga as notas em cada matéria e a média final do aluno.
// Dica: Para pegar os valores dentro do objeto para enviar para a função, você pode fazer assim: calcular_media(boletim.nota_portugues, boletim.nota_matematica, boletim.nota_historia).

let ptbr = 5
let hist = 8
let math = 9

function calcularMediaAritmetica(ptbr, hist, math){

    let media = (ptbr + hist + math) / 3
    return media

}
function mensagem(){

    console.log("A média do aluno será: " + calcularMediaAritmetica(boletim.portugues, boletim.historia, boletim.matematica))

}

boletim = {
    portugues: ptbr,
    historia: hist,
    matematica: math,
}

console.log("Nota de português: " + boletim.portugues)
console.log("Nota de história: " + boletim.historia)
console.log("Nota de matemática: " + boletim.matematica)
mensagem()