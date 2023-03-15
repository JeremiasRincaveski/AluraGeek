export const adicionaProduto = (url, descricao, nome, preco) => {
    produtos.appendChild(divProduto(url, descricao, nome, preco))
}

const produtos = document.querySelector('[data-produtos]')

const divProduto = (url, descricao, nome, preco) => {
    const produto = document.createElement('div')
    produto.classList.add('produto')

    const divProduto =`
            <img class="produto-img" src="${url}" alt="${descricao}">
            <h2 class="produto-nome">${nome}</h2>
            <p class="produto-preco">R$ ${preco}</p>
            <a class="link" href="#">Ver produto</a>
            `

    produto.innerHTML = divProduto
    return produto
}