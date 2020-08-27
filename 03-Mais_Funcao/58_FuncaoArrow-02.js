//Funções arrow no contexto de this são fixo

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
            console.log(this.idade);
    }, 1000)
}

//instanciando
new Pessoa