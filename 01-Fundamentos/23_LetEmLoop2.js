const funcs = []

for (let i = 0; i < 10; i++) {
    //Aqui dentro do laço iremos preencher o array
    funcs.push(function() {
        console.log(i);

    })

}

funcs[2]() //2
funcs[8]() //8

// o valor retornado para ambas é 2 e 8, pois é como se tivesse uma memoria no let , pois está contido num bloco de código