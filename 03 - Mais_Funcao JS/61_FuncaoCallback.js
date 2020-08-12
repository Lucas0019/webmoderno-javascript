// Uma função callback é uma função passada a outra função como argumento, 
// que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`);
}

fabricantes.forEach(imprimir)
    // Resultado

// 1. Mercedes
// 2. Audi
// 3. BMW

console.log('\n')

fabricantes.forEach(function(fabricante) {
    console.log(fabricante);
})

console.log('\n');

//EM uma função arrow
fabricantes.forEach(fabricante => console.log(fabricante))