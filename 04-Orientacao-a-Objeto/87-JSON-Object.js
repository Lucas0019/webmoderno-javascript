const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() { return a + b + c} 
}

console.log(obj);

// JSON para objeto
// Json é um formato de dadp como string, nesse caso a função soma é omitida
const json = JSON.stringify(obj)
console.log(json);

// Objeto para JSON
const newObj = JSON.parse(json)
console.log(newObj);

// Formatos aceitaveis em JSON
const formatosValidados = JSON.parse('{"a": 1, "b": "text", "c": true, "d": {}, "e": []}')
console.log(formatosValidados);