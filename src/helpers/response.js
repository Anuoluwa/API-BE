/**
 * returns an error message to the client
 * @param {integer} status HTTP status code
 * @param {object|string} message Error message as an object/text
 * @param {object} res HTTP response object
 * @returns {object} response
 */
export const failure = (status = 503, message = 'An error occurred', res) => {
  const errorObject = {
    status,
    message
  };

  return res.status(status).send(errorObject);
};

/**
 * returns an success message to the client
 * @param {integer} status HTTP status code
 * @param {any} message message as an object/text
 * @param {object} res HTTP response object
 * @returns {object} response
 */
export const success = (res, status = 200, message = 'Success', data = {}) => {
  const successObject = {
    status,
    message,
    data
  };

  return res.status(status).send(successObject);
};
