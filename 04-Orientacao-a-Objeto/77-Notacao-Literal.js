//Notação Literal

const a = 1;
const b = 2;
const c = 3;

//Antes do ECMAScript 2015
//Duplicidade de itens iguais
const obj1 = {
    a: a,
    b: b,
    c: c
};

//Depois
const obj2 = {
    a,
    b,
    c
}

console.log(obj1, obj2); //{ a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }


//Criar dinamicamente um atributo em um objeto