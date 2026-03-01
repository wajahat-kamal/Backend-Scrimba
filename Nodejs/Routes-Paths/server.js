import http from "node:http"
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 8000

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" })
        const heading = `<html><h1>The Server is Working!</h1></html>`
        res.end(heading)
    }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
