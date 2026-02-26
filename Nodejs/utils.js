
export function utils(res, statusCode, header1, header2, end) {
    res.setHeader(header1, header2)
    res.statusCode = statusCode
    res.end(end)
}