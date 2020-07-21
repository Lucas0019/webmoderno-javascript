//Característica e Cuidado que tem que ter
//Recomendado sempre usar chaves {} para uma sentença de código
function teste1(num) {
    if (num > 7) // Sem bloco associado
        console.log(num);

    console.log('Final'); // fora da sentença do bloco do if
}

//teste1(6)
//teste1(9)


//Não usa ; em estruturas de controle ( nesse caso if)
function teste2(num) {
    if (num > 7); // Aqui o ; 

    { //Inicio do Bloco
        console.log(num);

    } //fim do bloco do 
}

teste2(6)
teste2(8)