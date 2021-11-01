const fingerprintedFilePath = require('./fingerprinted-file-path')

module.exports = async function fingerprints(req) {
  const requestedFile = req.requestContext.http.path
  const fingerprinted = fingerprintedFilePath(requestedFile)
  return {
    statusCode: 303,
    headers: {
      'content-type': 'application/javascript; charset=utf8',
      location: fingerprinted
    }
  }
}
