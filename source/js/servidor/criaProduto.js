import { service } from "./service.js"


const formulario = document.querySelector("[data-form]")
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const url = e.target.querySelector('[data-tipo="url"]').value
    const categoria = e.target.querySelector('[data-tipo="categoria"]').value
    const nome = e.target.querySelector('[data-tipo="nome"]').value
    const preco = e.target.querySelector('[data-tipo="preco"]').value
    const descricao = e.target.querySelector('[data-tipo="descricao"]').value

    service.criaProduto(url, categoria, nome, preco, descricao).then((resposta)=> {console.log(resposta)})
})