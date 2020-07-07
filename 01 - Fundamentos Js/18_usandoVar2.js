// Objetivo: 

var numero = 1

{
    var numero = 2
    console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)
    //Dentro =  2
    //Fora =  2

// Irá retornar em ambos o 2 , porque a variavel VAR é global , e memso declarando no bloco de codigo ela irá se alterar