// Variáveis que contam diversos valores durante o jogo, como as jogadas e rodadas
var jogadas = 0
var rodada = 1

// Arrow functions que executam ações que se repetem durante o programa
const reiniciaJogo = () => location.reload()
const casaOcupada = () => alert("Esta casa já está ocupada, selecione outra!")

// Função que verifica os nomes dos jogadores, se eles informarem os nomes, eles serão chamados pelo tal
function verificaForm() {
    document.getElementById("rodada").innerHTML = `<strong>Rodada: ${rodada}<strong>`
    var vez = document.getElementById("vez")
    var nomeJ1 = document.getElementById("nomeJ1")
    var nomeJ2 = document.getElementById("nomeJ2")
    var inicia = document.getElementById("inicia")
    if (nomeJ1.value != "") {
        vez.style.color = "#FF3030"
        vez.innerHTML = `<strong>É a vez de ${nomeJ1.value}!<strong>`
    } else {
        vez.style.color = "#FF3030"
        vez.innerHTML = "<strong>É a vez do Jogador 1!<strong>"
    }
    if (nomeJ1.value != "" && nomeJ2.value != "") {
        alert(`Olá ${nomeJ1.value} e ${nomeJ2.value}, divirtam-se!`)
    }
    if (nomeJ1.value != "" && nomeJ2.value == "") {
        alert(`Olá ${nomeJ1.value} e Jogador 2, divirtam-se!`)
    }
    if (nomeJ1.value == "" && nomeJ2.value != "") {
        alert(`Olá Jogador 1 e ${nomeJ2.value}, divirtam-se!`)
    } else if (nomeJ1.value == "" && nomeJ2.value == "") {
        alert("Olá Jogador 1 e Jogador 2, divirtam-se!")
    }
    nomeJ1.disabled = true
    nomeJ2.disabled = true
    inicia.disabled = true
    document.getElementById("vez").style.display = "block"
    document.getElementById("tab").style.display = "block"
}

// Estiliza o parágrafo que mostra a vez do jogador 1
function verificaParagrafoJ1() {
    vez = document.getElementById("vez")
    nomeJ1 = document.getElementById("nomeJ1").value
    if (nomeJ1 != "") {
        vez.style.color = "#FF3030"
        vez.innerHTML = `<strong>É a vez de ${nomeJ1}!</strong>`
    } else {
        vez.style.color = "#FF3030"
        vez.innerHTML = "<strong>É a vez do Jogador 1!</strong>"
    }
}

// Estiliza o parágrafo que mostra a vez do jogador 2
function verificaParagrafoJ2() {
    vez = document.getElementById("vez")
    nomeJ2 = document.getElementById("nomeJ2").value
    if (nomeJ2 != "") {
        vez.style.color = "#1E90FF"
        vez.innerHTML = `<strong>É a vez de ${nomeJ2}!</strong>`
    } else {
        vez.style.color = "#1E90FF"
        vez.innerHTML = "<strong>É a vez do Jogador 2!</strong>"
    }
}



// Responsável pela lógica principal do jogo, verificando todas as 8 vitórias possíveis para cada um dos jogadores. Enquanto ninguém esta função sempre retornar false
function fimdeJogo() {
    var casa1 = document.getElementById("a1").textContent
    var casa2 = document.getElementById("a2").textContent
    var casa3 = document.getElementById("a3").textContent
    var casa4 = document.getElementById("b1").textContent
    var casa5 = document.getElementById("b2").textContent
    var casa6 = document.getElementById("b3").textContent
    var casa7 = document.getElementById("c1").textContent
    var casa8 = document.getElementById("c2").textContent
    var casa9 = document.getElementById("c3").textContent
    if (casa1.includes("X") && casa2.includes("X") && casa3.includes("X") || casa4.includes("X") && casa5.includes("X") && casa6.includes("X") || casa7.includes("X") && casa8.includes("X") && casa9.includes("X") || casa1.includes("X") && casa4.includes("X") && casa7.includes("X") || casa2.includes("X") && casa5.includes("X") && casa8.includes("X") || casa3.includes("X") && casa6.includes("X") && casa9.includes("X") || casa1.includes("X") && casa5.includes("X") && casa9.includes("X") || casa7.includes("X") && casa5.includes("X") && casa3.includes("X")) {
        var vez = document.getElementById("vez")
        vez.style.color = "white"
        vez.innerHTML = "<strong>FIM DE JOGO!</strong>"
        var nomeJ1 = document.getElementById("nomeJ1").value
        setTimeout(() => {
            if (nomeJ1 != "") {
                alert(`${nomeJ1} VENCEU!!!`)
                novoJogo()
            } else {
                alert("O Jogador 1 VENCEU!!!")
                novoJogo()
            }
        }, 10);
        return true
    }
    if (casa1.includes("O") && casa2.includes("O") && casa3.includes("O") || casa4.includes("O") && casa5.includes("O") && casa6.includes("O") || casa7.includes("O") && casa8.includes("O") && casa9.includes("O") || casa1.includes("O") && casa4.includes("O") && casa7.includes("O") || casa2.includes("O") && casa5.includes("O") && casa8.includes("O") || casa3.includes("O") && casa6.includes("O") && casa9.includes("O") || casa1.includes("O") && casa5.includes("O") && casa9.includes("O") || casa7.includes("O") && casa5.includes("O") && casa3.includes("O")) {
        var vez = document.getElementById("vez")
        vez.style.color = "white"
        vez.innerHTML = "<strong>FIM DE JOGO!</strong>"
        var nomeJ2 = document.getElementById("nomeJ2").value
        setTimeout(() => {
            if (nomeJ2 != "") {
                alert(`${nomeJ2} VENCEU!!!`)
                novoJogo()
            } else {
                alert("O Jogador 2 VENCEU!!!")
                novoJogo()
            }
        }, 10);
        return true
    } else {
        return false
    }
}

// Examina se a quantidade de jogadas chegou em 9 e alerta o fim de jogo
function verificaPlacar() {
    if (jogadas != 9) {
        fimdeJogo()
    } else if (fimdeJogo() === false) {
        var vez = document.getElementById("vez")
        vez.style.color = "white"
        vez.innerHTML = "<strong>FIM DE JOGO!</strong>"
        setTimeout(() => {
            alert("Não houve vencedores!")
            novoJogo()
        }, 10);
    }
}

// Pergunta aos jogadores se eles querem continuar jogando e reinicia o jogo, mas sem resetar as rodadas, se não reinicia a página e o contador de rodadas
function novoJogo() {
    var resposta = confirm("Vocês desejam continuar jogando?")
    if (resposta == true) {
        verificaParagrafoJ1()
        rodada++
        document.getElementById("rodada").innerHTML = `<strong>Rodada: ${rodada}<strong>`
        document.getElementById("a1").textContent = ""
        document.getElementById("a2").textContent = ""
        document.getElementById("a3").textContent = ""
        document.getElementById("b1").textContent = ""
        document.getElementById("b2").textContent = ""
        document.getElementById("b3").textContent = ""
        document.getElementById("c1").textContent = ""
        document.getElementById("c2").textContent = ""
        document.getElementById("c3").textContent = ""
        jogadas = 0
    }
    if (resposta == false) {
        reiniciaJogo()
    }
}

// Cada uma das funções abaixo calcula se o "X" deverá ser escrito na casa ou o "O", e chamam outras funções também, além de somar as jogadas para chegar em 9 e finalizar o jogo
function casaA1() {
    var a1 = document.getElementById("a1")
    var a1check = a1.textContent
    if (a1check.length == 1) {
        casaOcupada()
    } else if (jogadas % 2 == 0) {
        verificaParagrafoJ2()
        a1.style.color = "#FF3030"
        a1.innerHTML = "X"
        jogadas++
    } else if (jogadas % 2 == 1) {
        verificaParagrafoJ1()
        a1.style.color = "#1E90FF"
        a1.innerHTML = "O"
        jogadas++
    }
    verificaPlacar()
}

function casaA2() {
    var a2 = document.getElementById("a2")
    var a2check = a2.textContent
    if (a2check.length == 1) {
        casaOcupada()
    } else if (jogadas % 2 == 0) {
        verificaParagrafoJ2()
        a2.style.color = "#FF3030"
        a2.innerHTML = "X"
        jogadas++
    } else if (jogadas % 2 == 1) {
        verificaParagrafoJ1()
        a2.style.color = "#1E90FF"
        a2.innerHTML = "O"
        jogadas++
    }
    verificaPlacar()
}

function casaA3() {
    var a3 = document.getElementById("a3")
    var a3check = a3.textContent
    if (a3check.length == 1) {
        casaOcupada()
    } else if (jogadas % 2 == 0) {
        verificaParagrafoJ2()
        a3.style.color = "#FF3030"
        a3.innerHTML = "X"
        jogadas++
    } else if (jogadas % 2 == 1) {
        verificaParagrafoJ1()
        a3.style.color = "#1E90FF"
        a3.innerHTML = "O"
        jogadas++
    }
    verificaPlacar()
}

function casaB1() {
    var b1 = document.getElementById("b1")
    var b1check = b1.textContent
    if (b1check.length == 1) {
        casaOcupada()
    } else if (jogadas % 2 == 0) {
        verificaParagrafoJ2()
        b1.style.color = "#FF3030"
        b1.innerHTML = "X"
        jogadas++
    } else if (jogadas % 2 == 1) {
        verificaParagrafoJ1()
        b1.style.color = "#1E90FF"
        b1.innerHTML = "O"
        jogadas++
    }
    verificaPlacar()
}

function casaB2() {
    var b2 = document.getElementById("b2")
    var b2check = b2.textContent
    if (b2check.length == 1) {
        casaOcupada()
    } else if (jogadas % 2 == 0) {
        verificaParagrafoJ2()
        b2.style.color = "#FF3030"
        b2.innerHTML = "X"
        jogadas++
    } else if (jogadas % 2 == 1) {
        verificaParagrafoJ1()
        b2.style.color = "#1E90FF"
        b2.innerHTML = "O"
        jogadas++
    }
    verificaPlacar()
}

function casaB3() {
    var b3 = document.getElementById("b3")
    var b3check = b3.textContent
    if (b3check.length == 1) {
        casaOcupada()
    } else if (jogadas % 2 == 0) {
        verificaParagrafoJ2()
        b3.style.color = "#FF3030"
        b3.innerHTML = "X"
        jogadas++
    } else if (jogadas % 2 == 1) {
        verificaParagrafoJ1()
        b3.style.color = "#1E90FF"
        b3.innerHTML = "O"
        jogadas++
    }
    verificaPlacar()
}

function casaC1() {
    var c1 = document.getElementById("c1")
    var c1check = c1.textContent
    if (c1check.length == 1) {
        casaOcupada()
    } else if (jogadas % 2 == 0) {
        verificaParagrafoJ2()
        c1.style.color = "#FF3030"
        c1.innerHTML = "X"
        jogadas++
    } else if (jogadas % 2 == 1) {
        verificaParagrafoJ1()
        c1.style.color = "#1E90FF"
        c1.innerHTML = "O"
        jogadas++
    }
    verificaPlacar()
}

function casaC2() {
    var c2 = document.getElementById("c2")
    var c2check = c2.textContent
    if (c2check.length == 1) {
        casaOcupada()
    } else if (jogadas % 2 == 0) {
        verificaParagrafoJ2()
        c2.style.color = "#FF3030"
        c2.innerHTML = "X"
        jogadas++
    } else if (jogadas % 2 == 1) {
        verificaParagrafoJ1()
        c2.style.color = "#1E90FF"
        c2.innerHTML = "O"
        jogadas++
    }
    verificaPlacar()
}

function casaC3() {
    var c3 = document.getElementById("c3")
    var c3check = c3.textContent
    if (c3check.length == 1) {
        casaOcupada()
    } else if (jogadas % 2 == 0) {
        verificaParagrafoJ2()
        c3.style.color = "#FF3030"
        c3.innerHTML = "X"
        jogadas++
    } else if (jogadas % 2 == 1) {
        verificaParagrafoJ1()
        c3.style.color = "#1E90FF"
        c3.innerHTML = "O"
        jogadas++
    }
    verificaPlacar()
}