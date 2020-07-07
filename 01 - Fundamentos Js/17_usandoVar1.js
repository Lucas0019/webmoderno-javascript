// Objetivo : iremos dos deparar com alguns exercicios diferentes

//Primero coisa , declaramos uma variavel do tipo var dentro de 3 colchetes {}

{
    {
        {
            { var sera = 'sera?' }
            console.log(sera)
        }
    }
}
console.log(sera)

// sera?
// Em Js uma variavel só tem dois escopos possiveis 
// Em algumas liguagens de programação a variavel é somente vizivel dentro do bloco em que a mesma foi declarado



//OUTRO exemplo 
function teste() {
    var local = 123
    console.log(local)
        //123
        //Quando a Variavel for declarada dentro de uma função estára somente visivel dentro da mesma
}
teste()

//console.log(local)
//local is not defined