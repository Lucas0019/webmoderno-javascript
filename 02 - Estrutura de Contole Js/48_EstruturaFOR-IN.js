// O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  
// O laço pode ser executado para cada propriedade distinta do objeto

//A ordem não importa
//O FOR...IN retorna o ÍNDICE de cada elemento (Posição dele)
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i]);
}
//Retorna

// 0 6.7
// 1 7.4
// 2 9.8
// 3 8.1
// 4 7.7

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Xavier',
    idade: 20,
    peso: 71

}

for (let atributo in pessoa) {

    console.log(`${atributo} = ${pessoa[atributo]}`);
}