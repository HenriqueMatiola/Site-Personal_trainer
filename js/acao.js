var moldura
var botaoVoltar
var botaoAvancar
var indice
var temporizador
var fotos

const pastaImagem = "img/"
const extensaoImagem = ".png"
const tempoEspera = 2000

indice = 0

botaoAvancar = document.getElementById("btnAvancar")
botaoVoltar = document.getElementById("btnVoltar")
moldura = document.getElementById("moldura")

window.onload = Inicio

function Inicio(){
    botaoAvancar.onclick = Avancarfoto
    botaoVoltar.onclick = VoltarFoto
    MostrarFoto()
    AutomaticoFoto()
}

function MostrarFoto(){

    fotos = ["img1", "img2"]

    moldura.src = pastaImagem + fotos[indice] + extensaoImagem
}

function Avancarfoto(){

    if(indice < fotos.length -1){
    indice++
    }
    else{
        indice = 0
    }
    MostrarFoto()
    clearInterval(temporizador)
    AutomaticoFoto()
}

function VoltarFoto(){

    if(indice > 0){
    indice--
    }
    else{
        indice = fotos.length -1
    }
    MostrarFoto()
    clearInterval(temporizador)
    AutomaticoFoto()
}

function AutomaticoFoto(){

    temporizador = setInterval(Avancarfoto,tempoEspera)
}

