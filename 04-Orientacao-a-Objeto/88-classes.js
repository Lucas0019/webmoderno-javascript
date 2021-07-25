// class NomeClass { constructor() }
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
}

const alturaRetangulo = new Retangulo(10, 20).altura; // 10
const larguraRetangulo = new Retangulo(10, 20).largura; // 20

console.log('Altura do Retangulo: ' + alturaRetangulo); // 10);
console.log('Largura do Retangulo: ' + larguraRetangulo); // 20);


// Exemplo - Financeiro
class Lancamento {
  constructor(nome = 'Informacao', valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = []
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(lancamento => {
      this.lancamentos.push(lancamento);
    });
  }

  sumario() {
    let valorConsoliado = 0;
    this.lancamentos.forEach(lancamento => {
      valorConsoliado += lancamento.valor;
    })
    return valorConsoliado;
  }
}

const salario = new Lancamento('Salário', 4000);
const contaDeLuz = new Lancamento('Luz', -500)

const contas = new CicloFinanceiro(8, 2021)
contas.addLancamentos(salario, contaDeLuz)

console.log('Sado restante: ' + contas.sumario()); // -500 + 4000 => 3500;


// Exemplo - Herança em classe
class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Eletricista') {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super('Xavier');
  }
}

const filho = new Filho;
console.log(filho); // Xavier