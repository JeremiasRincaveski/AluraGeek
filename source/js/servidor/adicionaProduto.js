export const adicionaProduto = (produto) => {
    console.log('oi')
}

const produto = document.createElement('div')
produto.className = 'produto'

produto.innerHTML = divProduto(produto)

const divProduto = (produto) => {
    `<div class="produto">
        <img class="produto-img" href=${produto.url} alt="${produto.descricao}">
        <h2 class="produto-nome">${produto.nome}</h2>
        <p class="produto-preco">R$ ${produto.preco}</p>
        <a class="link" href="#">Ver produto</a>
    </div>`
}

const produtos = document.querySelector('[data-produtos]')