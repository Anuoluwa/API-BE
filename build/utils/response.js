"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.success = exports.error = exports.failure = void 0;

/**
 * returns an error message to the client
 * @param {integer} status HTTP status code
 * @param {object|string} message Error message as an object/text
 * @param {object} res HTTP response object
 * @returns {object} response
 */
var failure = function failure() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fail';
  var res = arguments.length > 1 ? arguments[1] : undefined;
  var errorObject = {
    status: status,
    message: message
  };
  return res.status(status).send(errorObject);
};
/**
 * returns an error message to the client
 * @param {integer} status HTTP status code
 * @param {object|string} message Error message as an object/text
 * @param {object} res HTTP response object
 * @returns {object} response
 */


exports.failure = failure;

var error = function error() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'error';
  var res = arguments.length > 1 ? arguments[1] : undefined;
  var errorObject = {
    status: status,
    message: message
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


exports.error = error;

var success = function success(res) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var successObject = {
    status: status,
    message: message,
    data: data
  };
  return res.status(status).send(successObject);
};

exports.success = success;