// Objetivo: 

var numero = 1

{
    var numero = 2
    console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)
    //Dentro =  2
    //Fora =  2

// Irá retornar em ambos o 2 , porque a variável VAR é global , e mesmo declarando no bloco de código ela irá se alterar