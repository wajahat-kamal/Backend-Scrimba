
export function sendJSONResponse(res, statusCode, payload) {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = statusCode
    res.end(JSON.stringify(payload))
}

export function getDataByPathParams(url, destinations, place) {
    const con = url.split("/").pop()
    const filteredData = destinations.filter((destination) => {
        return destination.place.toLowerCase() === con.toLowerCase()
    })
    return filteredData
}