import { adicionaProduto } from "./adicionaProduto.js"

const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:3000/produto')

http.send()

http.onload = () => {
    const data = JSON.parse(http.response)
    data.forEach(element => {
        adicionaProduto(element)
    })
}