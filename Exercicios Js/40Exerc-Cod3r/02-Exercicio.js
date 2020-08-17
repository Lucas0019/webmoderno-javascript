/**
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * 
 * Equilátero: Os três lados são iguais. 
 * Isósceles: Dois lados iguais. 
 * Escaleno: Todos os lados são diferentes.
 * 
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 */

function classifTriangulo(comp1, comp2, comp3) {

    if (comp1 == comp2 && comp2 == comp3) {
        return 'Equilátero'

    } else if (comp1 == comp2 || comp2 == comp3 || comp1 == comp3) {
        return 'Isósceles';

    } else {
        return 'Escaleno';
    }
}

console.log(classifTriangulo(4, 4, 4)); //Equilátero
console.log(classifTriangulo(2, 9, 9)); //Isósceles
console.log(classifTriangulo(2, 7, 4)); // Escaleno