import http from "node:http"
import { getDataFromDB } from "./db.js";

const PORT = 5000;

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    if (req.url === "/api" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200;
        res.end(JSON.stringify(destinations))
    }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))