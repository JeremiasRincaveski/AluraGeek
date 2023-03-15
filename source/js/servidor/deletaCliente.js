import { service } from "./service.js"

let produtos = document.querySelector("[data-produtos]")
produtos.addEventListener("click", (e) => {
    const divCliente = e.target.closest('[data-id]')
    const id = divCliente.dataset.id
    let botaoDeleta = e.target.className == "botaoDeleta"
    if (botaoDeleta) {
        service.deletaProduto(id)
        .then(() => {
            divCliente.remove()
        })
    }
})