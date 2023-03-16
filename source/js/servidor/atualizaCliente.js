import { service } from "./service.js"

const pegaUrl = new URL(window.location)
const id = pegaUrl.searchParams.get("id")

const paginaUrl = document.querySelector("[data-tipo='url']")
const paginaCategoria = document.querySelector("[data-tipo='categoria']")
const paginaNome = document.querySelector("[data-tipo='nome']")
const paginaPreco = document.querySelector("[data-tipo='preco']")
const paginaDescricao = document.querySelector("[data-tipo='descricao']")

service.detalhaProduto(id).then((data) => {
    paginaUrl.value = data.url
    paginaCategoria.value = data.categoria
    paginaNome.value = data.nome
    paginaPreco.value = data.preco
    paginaDescricao.value = data.descricao
})

const botaoEnviar = document.getElementById("adicionarProduto")
botaoEnviar.addEventListener("click", (event) => {
    service.atualizaProduto(id, paginaUrl.value, paginaCategoria.value, paginaNome.value, paginaPreco.value, paginaDescricao.value).then(() => {
        window.location.href = "produtos.html"
    })
})