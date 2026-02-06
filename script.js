function enviarWhats(event) {
    event.preventDefault()

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5511951629437'

const texto = `Olá! Me chamo ${nome}, ${mensagem}`
const msgFormatada = encodeURIComponent(texto)

const url = `https://wa.me/5511951629437/?t=${msgFormatada}`

console.log(url)

window.open(url, '_blank')



}
