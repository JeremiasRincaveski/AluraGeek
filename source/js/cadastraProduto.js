import valida from './validacao.js'

const url = document.getElementById('url')
const categoria = document.getElementById('categoria')
const nome = document.getElementById('nome')
const preco = document.getElementById('preco')
const descricao = document.getElementById('descricao')
const adicionarProduto = document.getElementById('adicionarProduto')

adicionarProduto.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click', url.validity)
})

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener('blur', (e) => {
        valida(e.target)
    })
})