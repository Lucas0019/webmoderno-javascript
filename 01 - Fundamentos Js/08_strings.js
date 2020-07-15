const escola = 'Cod3r'

console.log(escola.charAt(4)) // O charAt permite retornar o posição da  variável de acordo com o índice selecionado 
console.log(escola.charCodeAt(3)) // retorna o valor representado na tabela ask
console.log(escola.indexOf('3')) // retorna o digito localizado no índice 3

console.log(escola.substring(1)) // imprimir o restante da palavra/ numero a partir do índice estabelecido 
console.log(escola.substring(0, 3)) // imprimi o que foi definido entre os valores 

console.log('Escola '.concat(escola).concat('!')) // concatenando uma palavra, juntando 
console.log('Escola ' + escola + '!')
    //retorna -> Escola Cod3r

//pratica rápido 
const L = ' Lucas '
const D = ' dos '
const S = ' Santos '
const X = ' Xavier '

console.log('Meu nome inteiro é: \n'.concat(L).concat(D).concat(S).concat(X))

console.log(escola.replace(3, 'e')) // o replace substitui o conteúdo selecionado do índice

//gerando um array a partir de algumas palavras usando o .split
console.log('Lucas, dos, Santos, Xavier'.split(','))

//outros

console.log('3' + 2) // o + funciona e faz sentido para concatenação, ou seja ele junta p 3 e 0 o 2 , resultando 32 ao invés de 5
console.log('3' * 2)
console.log('3' - 2)
console.log('3' / 2)