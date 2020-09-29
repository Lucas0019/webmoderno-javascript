//Funções dentro de Object

//Object.freeze()
const obj1 = {
    nome: 'Lucas'
}
console.log(obj1);

obj1.idade = 20
obj1.email = 'xavier@emial.com'
console.log(obj1);

const obj2 = Object.freeze({
        nome: 'Santos'
    }

)
console.log(obj2);


const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Retorna os dados dos objetos

console.log(Object.values(pessoa)) //Retorna os valores dos objetos

console.log(Object.entries(pessoa)) //Retorna os dados dos objetos


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3,
    a: 4
}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)