const listaProduto = () => {
    return fetch('http://localhost:3000/produto')
    .then(resposta => {
        return resposta.json()
    })
}

const criaProduto = (url, categoria,  nome, preco, descricao) => {
    return fetch('http://localhost:3000/produto', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
            categoria: categoria,
            descricao: descricao,
            nome: nome,
            preco: preco
        })
    }).then(resposta => {
        return resposta.body
    })
}

const atualizaProduto = (id, url, categoria,  nome, preco, descricao) => {
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    }).then(resposta => {
        return resposta.json()
    })
}

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produto/${id}`).then(resposta => {return resposta.json()})
}

const deletaProduto = id => {
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE'
    })
}

export const service = {
    listaProduto,
    criaProduto,
    deletaProduto,
    atualizaProduto,
    detalhaProduto
}