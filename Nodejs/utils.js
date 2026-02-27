
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

export function getDataByQueryParams(data, queryObj) {
    const { country, continent, is_open_to_public } = queryObj;

    return data.filter((item) => {

        if (country) {
            return item.country.toLowerCase() === country.toLowerCase()
        } else if (continent) {
            return item.continent.toLowerCase() === continent.toLowerCase()
        } else if (is_open_to_public) {
            
        }
    })
}