// Usando o destructuring no âmbito de funções
//Substituindo por array

function rand([min = 0, max = 1000]) {
    if (min > max)
        [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])); //irá aparecer  um numero aleatoriamente entre 40 a 50
console.log(rand([998])); // Mesma função da linha 12 , por padrão 1000 é o max
console.log(rand([, 10])); //Passando somente o segundo valor , observe [ ,10]
console.log(rand([])); //Passando um array vazio ele assume que o min= 0 e o max= 100, então irá gerar números  entre esses valores
console.log(rand()); // retorna um erro ao passar uma função sem o array nesse caso
//TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined