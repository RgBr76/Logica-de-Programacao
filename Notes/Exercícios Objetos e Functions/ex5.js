// Variável para o nome da lista de tarefas
let nome_lista = "Minhas Tarefas de Hoje";

// Objeto para guardar as tarefas
let lista_de_tarefas = {};

// Função 1: Adicionar uma nova tarefa
function adicionar_tarefa(nova_tarefa) {
  lista_de_tarefas[nova_tarefa] = false;
}

// Função 2: Marcar uma tarefa como concluída
function marcar_concluida(tarefa) {
  if (lista_de_tarefas.hasOwnProperty(tarefa)) {
    lista_de_tarefas[tarefa] = true;
  } else {
    console.log("Essa tarefa não existe na lista.");
  }
}

// Função 3: Listar todas as tarefas
function listar_tarefas() {
  console.log(`\n--- ${nome_lista} ---`);
  for (let tarefa in lista_de_tarefas) {
    if (lista_de_tarefas.hasOwnProperty(tarefa)) {
      let status = lista_de_tarefas[tarefa] ? "Feita" : "Não feita";
      console.log(`${tarefa}: ${status}`);
    }
  }
  console.log("----------------------\n");
}

// Exemplo de Uso:
console.log(`Nome da lista: ${nome_lista}`);

adicionar_tarefa("fazer_dever");
adicionar_tarefa("ler_livro");
adicionar_tarefa("ajudar_em_casa");
adicionar_tarefa("regar_plantas");

marcar_concluida("fazer_dever");
marcar_concluida("ler_livro");

listar_tarefas();

marcar_concluida("lavar_louca"); // Tarefa que não existe