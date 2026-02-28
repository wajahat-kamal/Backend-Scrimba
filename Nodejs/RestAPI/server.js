import http from "node:http"
import { getDataFromDB } from "./db.js";
import { getDataByQueryParams, getDataByPathParams, sendJSONResponse } from "./utils.js";
const PORT = 5000;

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()

    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)

    if (urlObj.pathname === "/api" && req.method === "GET") {
        let filteredData = getDataByQueryParams(destinations, queryObj)
        sendJSONResponse(res, 200, filteredData)

    } else if (req.url.startsWith("/api/continent") && req.method === "GET") {

        const continent = req.url.split("/").pop()
        const filteredData = getDataByPathParams(destinations, "continent", continent)
        sendJSONResponse(res, 200, filteredData)

    } else if (req.url.startsWith("/api/country") && req.method === "GET") {

        const country = req.url.split("/").pop()
        const filteredData = getDataByPathParams(destinations, "country", country)
        sendJSONResponse(res, 200, filteredData)
    }
    else {
        sendJSONResponse(res, 404, { error: "not found", message: "The requested route does not exist" })
    }
})

server.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))