// Exercício 1: Calculadora de Área

// Variáveis: Crie duas variáveis para armazenar a largura e o comprimento de um retângulo. Escolha nomes que façam sentido, como largura e comprimento.
// Função: Crie uma função chamada calcular_area que receba a largura e o comprimento como entrada e retorne a área do retângulo (largura multiplicada pelo comprimento).
// Objetos: Crie um objeto chamado retangulo que armazene os valores da largura e do comprimento que você definiu nas variáveis.
// Chamada da Função: Use a função calcular_area passando como argumentos a largura e o comprimento que estão dentro do seu objeto retangulo.
// Resultado: Imprima na tela uma frase que mostre a largura, o comprimento e a área calculada do retângulo.


// Variáveis: Crie duas variáveis para armazenar a largura e o comprimento de um retângulo. Escolha nomes que façam sentido, como largura e comprimento.
let largura = 10;
let comprimento = 5;

// Função: Crie uma função chamada calcular_area que receba a largura e o comprimento como entrada e retorne a área do retângulo (largura multiplicada pelo comprimento).
function calcular_area(largura, comprimento) {
  let area = largura * comprimento;
  return area;
}

// Objetos: Crie um objeto chamado retangulo que armazene os valores da largura e do comprimento que você definiu nas variáveis.
let retangulo = {
  largura: largura,
  comprimento: comprimento
};

// Chamada da Função: Use a função calcular_area passando como argumentos a largura e o comprimento que estão dentro do seu objeto retangulo.
let area = calcular_area(retangulo.largura, retangulo.comprimento);

// Resultado: Imprima na tela uma frase que mostre a largura, o comprimento e a área calculada do retângulo.
console.log("A largura do retângulo é: " + retangulo.largura);
console.log("O comprimento do retângulo é: " + retangulo.comprimento);
console.log("A área do retângulo é: " + area);