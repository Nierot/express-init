import { getReasonPhrase } from 'http-status-codes'

/**
 * A helper function to ensure that all responses are in the same format.
 * @param {*} res The http res object
 * @param {number} status HTTP status code
 * @param {object} data The JSON data to send
 */
export function response(res, status, data) {
  res.status(status).json({ status, message: getReasonPhrase(status), data })
}

/**
 * A helper function for error responses
 * @param {*} res The http res object
 * @param {number} status HTTP status code
 * @param {string|object} error an error string
 * @param {object} data additional json data to be send
 */
export function error(res, status, error, data) {
  res
    .status(status)
    .json({ status, message: getReasonPhrase(status), error, data })
}

export default { response, error }
