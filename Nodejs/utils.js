
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

export function getDataByQueryParams(data, queryObj){
    const {country, continent, is_open_to_public} = queryObj;

    if (continent) {
        let data = getDataByPathParams(data, "continent", continent)
    } else if(country){
        let data = getDataByPathParams(data, "country", country)
    }
    return data;
}