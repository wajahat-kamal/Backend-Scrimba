
export function sendJSONResponse(res, statusCode, payload) {
    res.setHeader(header1, header2)
    res.statusCode = statusCode
    res.end(payload)
}