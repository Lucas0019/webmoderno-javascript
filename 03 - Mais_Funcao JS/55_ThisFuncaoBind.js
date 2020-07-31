/**
 * This e a Função Bind
 * 
 * O método bind() cria uma nova função que, quando chamada, 
 * tem sua palavra-chave this definida com o valor fornecido,
 * com uma sequência determinada de argumentos precedendo 
 * quaisquer outros que sejam fornecidos quando a nova função é chamada.
 * 
 */

const pessoa = {
    saudacao: 'Ola Lucas',
    //isso é uma função || ES15
    falar() {
        console.log(this.saudacao);
    }
}

//chamando
pessoa.falar() // Ola Lucas

//Armazenando uma função em uma variável 
const falar = pessoa.falar;
falar() // conflito entre paradigmas:  programação Funcional e Orientada a Objeto 
    //undefined

//Usando o bind
//bind, usa ele quando vc quer resolver uma situação this
const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa() // Ola Lucas