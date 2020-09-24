//Notação Literal

const a = 1;
const b = 2;
const c = 3;

//Antes do ECMAScript 2015
//Duplicidade de itens iguais
const obj1 = {
    a: a,
    b: b,
    c: c,
};

//Depois
const obj2 = {
    a,
    b,
    c,
};

console.log(obj1, obj2); //{ a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

//Criar dinamicamente um atributo em um objeto usando uma String

const nomeAttr = "nota";
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3); //{ nota: 7.87 }

//nova forma
const obj4 = {
    [nomeAttr]: valorAttr,
};
console.log(obj4); //{ nota: 7.87 }

//Funções em Objeto
const obj5 = {
    function1: function() {
        //...
        console.log("Fala Dev");
    },
    //Forma nova ECMAScript 2015 - Reduzida
    function2() {
        //...
        console.log("Opa Dev");
    },
};
console.log(obj5); //{ function1: [Function: function1], function2: [Function: function2] }