//Situação:Resolução de um problema de this

/**
 * setInterval
 * 
 * O setInterval() é uma função temporizadora. Ela executa uma função de retorno após determinado tempo.
 * A função setInterval() executará infinitamente, até que você execute a função clearInterval().
 * 
 * Definição:
 * 
 * O setInterval() chama uma função em intervalos de tempo definidos. 
 * Ele continuará chamando a função até que o clearInterval() seja chamado,
 * ou que a página seja fechada.
 * 
 */




function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
            console.log(self.idade)
    } /*.bind(this)*/ , 1000)
}

new Pessoa