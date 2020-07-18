/**
 * Try...Catch:
 * 
 * As declarações try...catch marcam um bloco de declarações para testar (try), 
 * e especifica uma resposta, caso uma exceção seja lançada.
 * 
 * Throw:
 * 
 * A declaração throw lança uma exceção definida pelo usuário. 
 * A execução da função atual vai parar (as instruções após o throw não serão executadas), 
 * e o controle será passado para o primeiro bloco catch na pilha de chamadas. 
 * Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.
 */

//Tratamento de um Inicio REAl de erro

/*function imprimirNomeGritando(obj) {
    console.log(obj.name.toUpperCase() + '!!!');
    //Essa função vai deixar em maiúsculo as palavras
}

const obj = { Nome: 'Lucas' };
imprimirNomeGritando(obj);

//Nesse cenário acima , retornou um ERRO
//TypeError: Cannot read property 'toUpperCase' of undefined

*/


/**Aplicando a tratativa  */

//Função de tratativa de erro , nesse caso , irá mostrar qual o erro 
function tratarErroELancar(erro) {
    //throw new Error('Erro identificado...')
    // throw 10
    // throw true
    // throw 'mensagem'

    /**Posso lançar um Objeto */
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


//Função com erro 
function imprimirNomeGritando(obj) {
    try { //O try é um bloco de código que julga que pode gerar um erro 
        console.log(obj.name.toUpperCase() + '!!!'); // o name aqui não é chamado no console.log , por isso o erro 
    } catch (e) {
        tratarErroELancar(e)
    } finally { // é um bloco que sempre irá ser chamado 
        console.log('Final');
    }

    //Essa função vai deixar em maiúsculo as palavras
}

const obj = { nome: 'Lucas' }; //  Aqui estamos chamando uma variável Nome que nem foi declarado
//const obj = { name: 'Lucas' }; //  Aqui é a forma correta , para a função não ocorrer o erro 
imprimirNomeGritando(obj);