//Padrão de Projeto - Funções Fabrica (Factory)
//Factory => Função que retorna um objeto

//Factory Simples, fixa
function criarPessoa() {
    return {
        nome: 'Lucas',
        sobrenome: 'Xavier'
    }
}

console.log(criarPessoa());