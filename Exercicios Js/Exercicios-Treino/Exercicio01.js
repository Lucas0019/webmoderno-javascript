/* 1) Faça um laço for de 0 a 100 que retorne um array com todos os números que são divisíveis por 7; */

retornaDivisivel = (number) => {
    for (let i = 0; i <= 100; i++) {

        if (number % 2 === 1) {
            console.log(i);
        }

    }
}

retornaDivisivel(7)

//Nota de Aula
// O processo que deve ser feito para verificar a divisibilidade por 7 é o seguinte: 

// “Multiplique por 2 o último algarismo do número. 
// Subtraia este valor do número inicial sem o último algarismo, 
//  resultado deve ser múltiplo de 7.”