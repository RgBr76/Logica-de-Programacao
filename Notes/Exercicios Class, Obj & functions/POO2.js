// Exercício 1: Cadastro de Brinquedo

// Classe: Crie uma classe chamada Brinquedo com os atributos: nome, tipo e preco.
// Objetos: Crie dois objetos diferentes da classe Brinquedo, definindo um nome, um tipo e um preço diferentes para cada um. 
// Exemplo: const brinquedo1 = new Brinquedo("Carrinho", "Veículo", 25.50); e const brinquedo2 = new Brinquedo("Boneca", "Figura de Ação", 30.00);
// Função: Crie uma função chamada exibirInformacoesBrinquedo que receba um objeto da classe Brinquedo como entrada e mostre no console o nome, 
// o tipo e o preço desse brinquedo de forma organizada.
// Chamada da Função: Chame a função exibirInformacoesBrinquedo para cada um dos objetos de Brinquedo que você criou.

class Brinquedo{
    constructor(name, type, price){
      this.name = name
      this.type = type
      this.price = price

    }
//Não preciso colocar Function pq ela já é um método da classe
    exibirInformacoesBrinquedo(){
      console.log("Brinquedo: " + this.name)
      console.log("Tipo: " + this.type)
      console.log("Preço: " + this.price)

    }

}

const brinquedo1 = new Brinquedo("Carrinho", "Veículo", 25.50)
const brinquedo2 = new Brinquedo("Boneca", "Figura de Ação", 30.00)

brinquedo1.exibirInformacoesBrinquedo()

