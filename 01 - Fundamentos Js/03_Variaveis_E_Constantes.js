var a = 3
let b = 4

var a = 30
b = 40

console.log(a, b)

 a = 300
 b = 400

 console.log(a, b)

 const c = 5
 // c = 5

 console.log(c)

 /**
  * Nessa aula aprendemos tres maneiras de declarar uma variavel
  
  PRIGRAMADOR BR

  //Diferença entre Var, Let e Const

// var é uma variavel global que funciona em qualquer linha do codigo
// let só funciona dentro do bloco declarado 


/*if(true){
    if(true ){

        let a = 30
        //var a = 10
        //var a = "texto"

        //console.log(a)

console.log(a)*/

//Const tem o mesmo comportamento de um let, ou seja só funciona dentro do bloco de código em que foi definido
// Só que não posso eatribuir um valor a uma variavel que já tem um valor definido

if(true){
    const a = { Nome: "lucas" } 
    a.Nome = "Xavier" // Só consigo modificar a variavel se eu chamar ela e alterar ela novamente 

    console.log(a)
}

