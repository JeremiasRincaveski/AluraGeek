const email = document.getElementById('email')
const senha = document.getElementById('senha')
const botaoLogin = document.querySelector('.login-botao')

botaoLogin.addEventListener('click', (e) => {
    //e.preventDefault()
    //window.location.href = './index.html'
})

email.addEventListener('blur', () => {
    console.log(email.value)
})