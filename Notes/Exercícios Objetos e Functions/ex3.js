// Exercício 3: Mensagem Personalizada

// Variáveis: Crie duas variáveis para guardar o nome de uma pessoa (nome_pessoa) e a idade dela (idade_pessoa).
// Função: Crie uma função chamada criar_mensagem que receba o nome e a idade como informações e crie uma frase como: "Olá, [nome]! Você tem [idade] anos.". A função deve retornar essa frase.
// Objeto: Crie um objeto chamado pessoa e guarde dentro dele o nome e a idade que você definiu nas variáveis do item 1.
// Chamada da Função: Use a função criar_mensagem, enviando o nome e a idade que estão dentro do objeto pessoa.
// Resultado: Imprima na tela a mensagem personalizada que a função criou.

let name = "Rodrigo"
let age = 17

function criar_mensagem(name, age){

    console.log(`Olá ${name}! Você tem ${age} anos`)
    return

}

person = {
    name: name,
    age: age
}

//chama a function, como dentro dela já tem o console.log pronto, não precisa colocar o console.log de novo fora da function.
criar_mensagem(person.name, person.age)
