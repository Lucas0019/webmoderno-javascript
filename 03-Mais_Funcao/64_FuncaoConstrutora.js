// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
//
// constructor([argumentos]) { ... }https://app.rocketseat.com.br/me/vinicius-

function Carro(velocidadeMax = 200, delta = 5) {
    //Atributo privado
    let velocidadeAtual = 0

    //método publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    //método publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}


//casos de uso
const uno = new Carro
uno.acelerar()
console.log('🚙' + uno.getVelocidadeAtual()) //5

const ferrari = new Carro(350, 20);
ferrari.acelerar() // +20
ferrari.acelerar() // +20
ferrari.acelerar() // +20
console.log('🏎' + ferrari.getVelocidadeAtual()); //60

//Aqui temos duas instancias diferentes a partir da mesma
//FUNÇÂO construtora - Paradigma OO (Orientada a Objeto)

//Tipos
console.log(typeof Carro); //Função
console.log(typeof ferrari); //Objeto