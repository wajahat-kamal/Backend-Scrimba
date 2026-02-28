
export function sendJSONResponse(res, statusCode, payload) {
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Method", "GET")
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
        let match = true
        if (country) {
            match = match && item.country?.toLowerCase() === country.toLowerCase()
        } 
        if (continent) {
            match = match && item.continent?.toLowerCase() === continent.toLowerCase()
        } 
        if (is_open_to_public !== undefined) {
            const value = is_open_to_public === "true"
            match = match && item.is_open_to_public === value
        }
        return match;
    })
}