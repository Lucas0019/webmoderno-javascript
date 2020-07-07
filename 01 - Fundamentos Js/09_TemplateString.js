//Template strings são envolvidas por (acentos graves) (` `) em vez de aspas simples ou duplas. 
//Template strings podem possuir placeholders. Estes são indicados por um cifrão seguido de chaves 
//(${expression}).


const nome = 'Lucas'
const concatenar = 'Olá ' + nome + '!'

const template = `
    Olá 
    ${nome}!`

console.log(concatenar, template)

//Pratica rapida

let cor = 'Roxo'
let juntar = 'A cor ' + cor + '!'

let resultado = `é miha 
    "favorita" é
     ${cor}!`

console.log(juntar, resultado)

// resultado => A cor Roxo! é miha "favorita" é Roxo!


//Aplicando em expressões....
console.log(`1 + 1 =  ${1 + 1}`)

//Será estudado na aula de funções
//Primeiras funções...

if(true){
    const up = texto => texto.toUpperCase()
    console.log(`Ei...  ${up('Cuidado')}!`) // transforma as palvaras em maiusculas 
}

let up = POTA => POTA.toUpperCase()
console.log(`tudo minusculo ${up('em')}`)

