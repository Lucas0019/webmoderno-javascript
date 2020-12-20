// 2) Crie uma função que receba dois parâmetros, o primeiro chamado 'texto' - string - e o segundo chamado 'vezes' - numero -.
//Esta função tem como objetivo retornar uma nova string com o texto repetido, 
//separado por virgula, quantas vezes foi passado no parâmetro 'vezes'. Exibir esta nova string no console.




// console.log('Lucas, '.repeat(2));


repeatText = (texto, vezes) => console.log(`${texto.repeat(vezes)}`)

repeatText('Lucas, ', 4)
repeatText('Lucas, ', 10)