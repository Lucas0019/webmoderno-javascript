// Usando o destructuring no âmbito de funções

//Usando por Objeto 
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//aqui temos as diferentes formas de chamar o objeto
const obj = { max: 50, min: 40 } // irá aparecer  um numero aleatoriamente entre 40 a 50
console.log(rand(obj))
console.log(rand({ min: 955 })) // Mesma função da linha 10 , por padrão 1000 é o max
console.log(rand({})) // testando com um objeto vazio
console.log(rand()) // retorna um problema , pois estamos tentando passar sem o objeto
    //TypeError: Cannot destructure property `min` of 'undefined' or 'null'.




//Substituindo por array