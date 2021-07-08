"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCustomersWithoutLoans = void 0;

var getAllCustomersWithoutLoans = function getAllCustomersWithoutLoans(User) {
  var docs = User.find().select('-__v -loans -password -blockchainAcct -isVerified -_id -createdAt -updatedAt').lean().exec().then(function (result) {
    return result;
  })["catch"](function (error) {
    return error;
  });
  return docs;
};

exports.getAllCustomersWithoutLoans = getAllCustomersWithoutLoans;