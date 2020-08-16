//Portar para uma função construtor 
// class Pessoa {
//     constructor(nome) {
//             this.nome = nome
//         }
//         //Método
//     falar() {
//         console.log(`Meu nome é ${this.nome}`);
//     }
// }

//Fica Assim
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

//Executando 
const p1 = new Pessoa('Lucas Xavier')
p1.falar()
console.log(p1.nome)