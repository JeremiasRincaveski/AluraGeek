import { service } from "./service.js"

const produtos = document.querySelector('[data-produtos]')

const divProduto = (id, url, descricao, nome, preco) => {
    const produto = document.createElement('div')
    produto.classList.add('produto')
    produto.dataset.id = id

    const divProduto =`
            <img class="produto-img" src="${url}" alt="${descricao}">
            <h2 class="produto-nome">${nome}</h2>
            <p class="produto-preco">R$ ${preco}</p>
            <a class="link" href="#">Ver produto</a>
            <button class="botaoDeleta" >deleta</button>
            <a href="./adicionarProduto.html/?id=${id}" class="botaoEdita" >edita</a>
            `

    produto.innerHTML = divProduto
    return produto
}

service.listaProduto().
then(datas => {
    datas.forEach(data => {
        produtos.appendChild(divProduto(data.id, data.url, data.descricao, data.nome, data.preco))
    })
})