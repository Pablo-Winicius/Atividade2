//1 - crie uma função que exiba uma mensagem no console

function visualizar(){
    console.log('Olá mundo')
}

visualizar()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

let nome = 'Pablo Falcao'

function visualizarnome(nome){
    console.log(` Nome ${nome}`)
}
visualizarnome(nome)

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function visualizarcuriosidades(nome,idade,estilo){
    console.log(`Nome ${nome}, Idade ${idade} Gosto musical ${estilo}`)
}
visualizarcuriosidades(nome, 21, 'Rap' )


//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function gostos(filme, musica){
    console.log(`Filme preferido ${filme}, melhor musica ${musica}`)

}
gostos('À Procura da Felicidade',' lose yourself')

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplicar(nu){
    return nu * 3

}
console.log(triplicar(10))

//6 - crie uma função que  verifique se uma  variável é true ou false

const variav= true
function  verificador(){
    if(variav==true){
    console.log(`Variavel é ${variav}`)
    }else{
    console.log(`Variavel é ${variav}`)
    }

}
verificador()