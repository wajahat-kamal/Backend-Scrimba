
export function sendJSONResponse(res, statusCode, payload) {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = statusCode
    res.end(JSON.stringify(payload))
}

export function getDataByPathParams(data, locationType, loactionName) {
    return data.filter((destination) => {
        return destination[locationType].toLowerCase() === loactionName.toLowerCase()
    })
}