import { service } from "./service.js"

const pegaUrl = new URL(window.location)
const id = pegaUrl.searchParams.get("id")
