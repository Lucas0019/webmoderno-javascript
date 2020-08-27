// Objetivo : iremos dos deparar com alguns exercícios diferentes

//Primero coisa , declaramos uma variável do tipo var dentro de 3 colchetes {}

{
    {
        {
            { var sera = 'sera ?' }
            console.log(sera)
        }
    }
}
console.log(sera)

// sera?
// Em Js uma variável só tem dois escopos possíveis 
// Em algumas linguagens de programação a variável é somente visível dentro do bloco em que a mesma foi declarado



//OUTRO exemplo 
function teste() {
    var local = 123
    console.log(local)
        //123
        //Quando a Variável for declarada dentro de uma função estará somente visível dentro da mesma
}
teste()

//console.log(local)
//local is not defined