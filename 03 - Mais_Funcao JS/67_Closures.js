/*
 *Closure é o escopo criado quando uma função é declarada
 *Esse escopo permite a função acessar e manipular variáveis externas à função
 *Memoria do local de origem
 *
 *Em outras palavras , CLOSURE é quando uma função "Lembra"
 *Seu escopo lexico, mesmo quando a função
 *é executada fora desse escopo lexico
 */


//contexto lexico em ação

const x = 'Global';

function fora() {
    const x = 'Local';

    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());