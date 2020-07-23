// A instrução for cria um loop que consiste em três expressões opcionais,
//  dentro de parênteses e separadas por ponto e vírgula, 
//  seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

//Sintaxe: for ([inicialização]; [condição]; [expressão final])
//declaração


//Iremos ver dois caso um com While e outro com FOR para entendermos as diferenças


//Usando o while 1 ao 10
//Quantidade determinada
let contador = 1
    //Quando o contador for menor que 10, ele sai do laço while
while (contador <= 10) {
    console.log(`contador =  ${contador}`);
    contador++ //incremento
}

//Usando o FOR 1 ao 10
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}


const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`);

}