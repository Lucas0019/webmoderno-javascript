//Conceito de cadeia na prática

Object.prototype.atrX = 'Achou' //Não faça isso , pense antes e veja a situação pois impacta em todos os objetos

const avo = { atr1: 'A' }
const pai = { __proto__: avo, atr2: 'B', atr3: '03' }
const filho = { __proto__: pai, atr3: 'C' }

console.log(filho.atr1);//A , esses atributo A herda do objeto avo
console.log(filho.atr0);//undefined, retorna isso pois não tem esse objeto
console.log(filho.atrX);//Achou, aqui retornar o Achou pois ele foi declarado no Object.prototype

console.log(filho.atr3);//retorna C , pois é o primeiro elemento encontrado




/*Exemplo um pouco mais complexo*/
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)//{ modelo: 'F40', velMax: 324 }
console.log(volvo)//{ modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status())//V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status())//300Km/h de 324Km/h