// Exercício 2: Cadastro de Livro

// Classe: Crie uma classe chamada Livro com os atributos: titulo, autor e ano_publicacao.

// Objetos: Crie dois objetos diferentes da classe Livro, definindo um título, um autor e um ano de publicação diferentes para cada um. 
// Por exemplo: livro1 = Livro(titulo="Aventuras de um Jovem", autor="Escritor Famoso", ano_publicacao=2010) e livro2 = Livro(titulo="Mistérios da Cidade", autor="Autora Desconhecida",
//  ano_publicacao=2023).

// Função: Crie uma função chamada exibir_informacoes_livro que receba um objeto da classe Livro como entrada e imprima na tela o título, o autor e o ano de publicação desse 
// livro de forma organizada.

// Chamada da Função: Chame a função exibir_informacoes_livro para cada um dos objetos de Livro que você criou.

// Classe Livro
class Livro {
    constructor(titulo, autor, ano_publicacao) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano_publicacao = ano_publicacao;
    }
  }
  
  // Criação dos objetos Livro
  const livro1 = new Livro("Aventuras na Floresta", "Maria Silva", 2018);
  const livro2 = new Livro("O Segredo do Lago", "João Pedro", 2022);
  
  // Função para exibir informações do livro
  function exibirInformacoesLivro(livro) {
    console.log("Informações do Livro:");
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.ano_publicacao}`);
    console.log("-".repeat(20)); // Linha para separar as informações dos livros
  }
  
  // Chamada da função para cada objeto Livro
  exibirInformacoesLivro(livro1);
  exibirInformacoesLivro(livro2);