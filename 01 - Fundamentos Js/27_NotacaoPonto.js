// Aprender a importancia do PONTO
//A notação ponto ja usada , tem como função acessar partes/recursos do javascript

console.log(typeof console); //Obejto

console.log(Math.ceil(6.1)); // Arredonda para o teto , nesse caso 7


//criando um objeto e agrefando dados dinamicamnete 
const obj1 = {}
obj1.nome = 'Bola'
    // obj1['Bola'] = 'Bola' 
console.log(obj1.nome);

function Obj(nome) {
    //this é nome associado ao objeto que for chamado
    this.nome = nome // aqui estamos expondo essa função
    this.exec = function() {
        console.log('Exec...');


    }

}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome);
console.log(obj3.nome);


console.log(obj2.exec());
//ou
obj2.exec()