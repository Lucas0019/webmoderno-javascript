//This e bind em arrow function
let comparaComThis = function(paran) {
    console.log(this === paran)
}

//Contexto de node : this = Global
//contexto de Browser : this ==/ global (window)
comparaComThis(global) //True

//O this agr não aponta para o global
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //False
comparaComThis(obj) //True

//No cenário de uam Arrow function
//Dentro do modulo do node
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //False
comparaComThisArrow(module.exports) //True


//bind dentro de uma função arrow
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //False
comparaComThisArrow(module.exports) // True