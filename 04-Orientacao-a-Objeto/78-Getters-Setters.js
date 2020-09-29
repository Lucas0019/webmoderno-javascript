//Getters: A sintaxe de get associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.
// prop - O nome da propriedade à qual a função dada será associada.
// expression - A partir do ECMAScript 6, você pode também utilizar expressões para um nome computado de uma propriedade para associar à função dada.


//Setters - A sintaxe set liga a propriedade da função para ser chamada quando existe uma tentativa de definir valor para essa propriedade.
// prop - Nome da propriedade ligada a função.
// val - Um apelido para variável que será atribuída da a prop.
// expression -Iniciando com ECMAScript 6, você pode usar também expressões para computar o nome da propriedade a ser definida na função.

const sequencia = {
    _valor: 1, // convenção
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)