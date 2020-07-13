/**Nota de Aula
 *
 * V e V = V
 * V e F = F
 * F e ? = F
 *Então precisamos que pelo menos um operando seja verdadeiro para o resultado final ser verdadeiro 
 * V ou ? = V
 * F ou V = V
 * F ou F = F
 *
 *Ou Exclusivo
 * V xor V = F
 * V xor F = V
 * F xor V = V
 * F xor F = F
 *
 * Negação Logica em Js
 * !v = F
 * !f = V
 */

//EXEMPLO QUE IREMOS TRABALHAR

/**Situação: Você tem dois trabalhos numa determinada semana, um na terça e o outro na quinta
 * Se os dois derem certo e você receber o seu salario, terá a possibilidade de comprar uma TV de 50 polegadas e comprar um sorvete,
 *  ESSE È O OPERADOR IN
 *
 * Caso contrário ! se pelo menos um dos trabalhos ( o da terça ou quinta) não derem certo , irá comparar somente uma tv de 32 polegadas
 *
 * e se NÂO der certos os dois trabalhos não terá como comparar nenhuma TV
 * 
 * o OU será o sorvete
 *
 * Lembrando:
 *  --> IN (TV 50 POLEGADAS)
 *  --> OU EXCLUSIVO (TV 32 POLEGADAS)
 *  --> OU (Sorvete)
 */

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || = OU
    const comprarTV50 = trabalho1 && trabalho2 // && = E
        //const comprarTV32 = !!(trabalho1 ^ trabalho2) // || OU Exclusivo, bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 // Um bitwise pode ser entendido com uma diferença
    const manterSaudavel = !comprarSorvete // usamos uma negação para comprarSorvete , aqui temos um operador Unário

    //Podemos criar objeto dessa maneira abaixo com a nova versão do Js
    return {
        comprarSorvete,
        comprarTV50,
        comprarTV32,
        manterSaudavel
    }
}

//Casos teste
console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));