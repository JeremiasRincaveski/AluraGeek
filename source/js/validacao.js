export function valida(input) {
    const tiposDeInput = input.dataset.tipo

    if (validadores[tiposDeInput]) {
        validadores[tiposDeInput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tiposDeInput, input)
    }

}

const validadores = {
    url:input => validaURL(input),
    categoria:input => validaCategoria(input),
    nome:input => validaNome(input),
    preco:input => validaPreco(input),
    descricao:input => validaDescricao(input)
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagemDeErro = {
    url: {
        valueMissing: 'O campo URL é obrigatório',
        patternMismatch: 'O campo URL não é válido'
    },
    categoria: {
        valueMissing: 'O campo Categoria é obrigatório'
    },
    nome: {
        valueMissing: 'O campo Nome é obrigatório'
    },
    preco: {
        valueMissing: 'O campo Preco é obrigatório',
        typeMismatch: 'O campo Preco não é válido'
    },
    descricao: {
        valueMissing: 'O campo Descrição é obrigatório',
        patternMismatch: 'O campo Descrição suporta até 150 caracteres'
    }
}

const validaURL = (dado) => {
    let mensagem = ''

    if (dado.value.length === 0) {
        dado.setCustomValidity('O campo URL é obrigatório')
    }
}