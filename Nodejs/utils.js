
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

    if (continent) {
        return getDataByPathParams(data, "continent", continent)
    } else if (country) {
        return getDataByPathParams(data, "country", country)
    } else if (is_open_to_public) {
        return data.filter((item) => {
            return item.is_open_to_public === is_open_to_public
        })
    }
}