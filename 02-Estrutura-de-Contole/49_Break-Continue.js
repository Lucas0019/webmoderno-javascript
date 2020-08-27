//Evitar uso do Break e Continue, pois os mesmos podem ocasionar em desvios de Fluxo

// BREAK
// O comando break encerra o loop atual, switch, ou o loop que foi informado no label e 
// transfere o controle da execução do programa para o comando seguinte.

// CONTINUE
// A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um laço rotulado,
// e continua a execução deste laço com a próxima iteração.

//Break
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Array de 10 números (nums)

//Percorrendo o array nums , usando o Break
for (let x in nums) {
    if (x == 5) {
        break //Interrompe quando o X for igual ao 5 e sai do laço
    }
    console.log(`${x} = ${nums[x]}`);
}

console.log('Saiu do Loop');

console.log('\n'); //Só uma divisa

//CONTINUE
//Percorrendo o array nums , usando o Break
for (let y in nums) {
    if (y == 5) {
        continue // Ele ignora quando o X é igual ao 5 e continua com a amostragem dos valores 
    }
    console.log(`${y} = ${nums[y]}`);
}

console.log('Saiu do Loop');

console.log('\n'); //Só uma divisa


//Essa estrutura não é muito usada, mas fica para conhecimento 
externo: //Rotulo 
    for (let a in nums) {
        for (b in nums) {
            if (a == 2 && b == 3) break externo
            console.log(`Par = ${a},${b}`);
        }

    }

console.log('Achei o 3 e to saindo !!!');