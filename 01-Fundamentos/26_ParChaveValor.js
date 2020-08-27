//Par nome/valor 

const saudacao = 'opa' //Contexto Lexico 1

function exec() {
    const saudacao = 'Falaaa' //Contexto Lexico 1
    return saudacao

}

//Objetos são grupo aninhados de chave-valor

const cliente = {
    Nome: 'Lucas',
    Idade: 20,
    Peso: 70,
    Endereço: {
        Rua: 'Rua das Goiabeiras',
        Numero: 20
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);