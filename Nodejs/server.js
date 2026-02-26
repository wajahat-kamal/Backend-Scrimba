import http from "node:http"
import { getDataFromDB } from "./db";

const PORT = 8000;

const server = http.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        const data = JSON.stringify(getDataFromDB)
        res.end(data)
    }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))