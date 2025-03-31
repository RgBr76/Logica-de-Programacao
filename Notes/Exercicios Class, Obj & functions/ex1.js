// Classe Aluno
class Aluno {
    constructor(nome, idade, nota) {
      this.nome = nome;
      this.idade = idade;
      this.nota = nota;
    }
  }
  
  // Criação dos objetos Aluno
  const aluno1 = new Aluno("Ana", 15, 8.5);
  const aluno2 = new Aluno("Pedro", 16, 9.2);
  
  // Função para exibir informações do aluno
  function exibirInformacoesAluno(aluno) {
    console.log("Informações do Aluno:");
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Nota: ${aluno.nota}`);
    console.log("-".repeat(20)); // Linha para separar as informações dos alunos
  }
  
  // Chamada da função para cada objeto Aluno
  exibirInformacoesAluno(aluno1);
  exibirInformacoesAluno(aluno2);