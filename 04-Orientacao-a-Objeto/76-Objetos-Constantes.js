//pessoa -> endereço da memoria 123 ->{...}
const pessoa = {
    nome: 'Lucas'
};

//Renomeando a propriedade do objeto
pessoa.nome = 'Lucas Xavier'
console.log(pessoa.nome);

//pessoa -> endereço da memoria 456 -> {...}
// pessoa = {
//     nome: 'Santos'
// }



// Object.freeze()

// O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; 
// impede que as propriedades existentes sejam removidas;
// e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas.
//  Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.
Object.freeze(pessoa)

pessoa.nome = 'Santos'
pessoa.corFavorita = 'Red'
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);



//Objeto constante com Object.freeze()
const pessoaConstante = Object.freeze({
    nome: 'Lucas',
    idade: 20,

})