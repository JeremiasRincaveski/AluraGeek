const nome = document.getElementById('nome')
const login = document.querySelector('[data-login]')
const mensagem = document.getElementById('mensagem')

login.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = './login.html'
})

const promocao = document.querySelector('[data-verPromocao]')
promocao.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = '#console'
})

const botaoEnviar = document.querySelector('[data-enviar]')
botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    if ((nome.value.length > 1 && nome.value.length < 40 && nome.value != '' && mensagem.value.length > 1 &&mensagem.value != '' && mensagem.value.length < 120)) {
        console.log(nome.value.length, mensagem.value.length)
        window.location.href = '#'
    } else {
        if (nome.value < 1 || nome.value == '') {
            alert ('O nome tem que ser menor que 40 caracteres e não pode estar em branco')
        }
        if (mensagem.value.length < 1 || mensagem.value == '') {
            alert ('A mensagem tem que ser menor que 120 caracteres e não pode estar em branco')
        }
    }
})

nome.addEventListener('blur', (e) => {
    if (nome.value.length < 1 || nome.value.length > 40 || nome.value == '') {
        nome.style.color = 'red'
        nome.placeholder = 'O nome tem que ser menor que 40 caracteres e não pode estar em branco'
    }
    if (nome.value.length > 1 && nome.value.length < 40) {
        nome.style.color = '#464646'
        nome.placeholder = ''
    }
})

mensagem.addEventListener('blur', (e) => {
    if (mensagem.value.length < 1 || mensagem.value.length > 120 || mensagem.value == '') {
        mensagem.style.color = 'red'
        mensagem.placeholder = 'A mensagem tem que ser menor que 120 caracteres e não pode estar em branco'
    }
    if (mensagem.value.length > 1 && mensagem.value.length < 40) {
        mensagem.style.color = '#464646'
        mensagem.placeholder = ''
    }
})