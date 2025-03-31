// Variáveis: Crie duas variáveis para guardar a largura e o comprimento de um retângulo (use nomes como largura_perimetro e comprimento_perimetro).
// Função: Faça uma função chamada calcular_perimetro que receba a largura e o comprimento como informações e calcule o perímetro do retângulo (que é a soma de todos os lados: largura + comprimento + largura + comprimento). A função deve retornar o valor do perímetro.
// Objeto: Crie um objeto chamado retangulo_perimetro e guarde dentro dele os valores da largura e do comprimento que você criou nas variáveis do item 1.
// Chamada da Função: Use a função calcular_perimetro, passando como informações a largura e o comprimento que estão dentro do objeto retangulo_perimetro.
// Resultado: Mostre na tela uma frase que diga a largura, o comprimento e o perímetro calculado do retângulo.


let largura_perimetro = 10
let comprimento_perimetro = 5


//função que será chamada para calcular perímetro
function calcular_perimetro( largura_perimetro, comprimento_perimetro){

    let perimetro = (2 * largura_perimetro) + (2 * comprimento_perimetro)
    return perimetro
}

//Objeto perímetro com largura e comprimento, e os valores são puxados das variáveis lá no início

perimetro = {
    largura: largura_perimetro,
    comprimento: comprimento_perimetro
}


//Teste de objeto
console.log(perimetro)
console.log(perimetro.largura)
console.log(perimetro.comprimento)

//Console.log(resultados finais!!)

console.log("Largura (em mts): " + perimetro.largura)
console.log("Comprimento (em mts): " + perimetro.comprimento)
console.log("Perímetro (em mts): " + calcular_perimetro(perimetro.largura, perimetro.comprimento))