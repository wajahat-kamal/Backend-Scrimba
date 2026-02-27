import http from "node:http"
import { getDataFromDB } from "./db.js";
import { sendJSONResponse } from "./utils.js";

const PORT = 5000;

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    if (req.url === "/api" && req.method === "GET") {
        sendJSONResponse(res, 200, destinations)

    } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
        // const continent = req.url.split("/").pop()
        // const filteredData = destinations.filter((destination) => {
        //     return destination.continent.toLowerCase() === continent.toLowerCase()
        // })
        
        function url(url, destinations, place) {
            const con = url.split("/").pop()
            const filteredData = destinations.filter((destination) => {
                return destination.place.toLowerCase() === con.toLowerCase()
            })
            return filteredData
        }
        sendJSONResponse(res, 200, filteredData)
    }
    else {
        sendJSONResponse(res, 404, { error: "not found", message: "The requested route does not exist" })
    }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))