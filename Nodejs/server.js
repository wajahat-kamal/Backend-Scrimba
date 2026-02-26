import http from "node:http"
import { getDataFromDB } from "./db.js";

const PORT = 5000;

const server = http.createServer((req, res) => {
    const destinations = JSON.stringify(getDataFromDB)
    if (req.url === "/api" && req.method === "GET") {
        res.end(destinations)
    }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))