"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

require('dotenv').config();

var config = {
  secrets: {
    jwt: process.env.JWT_SECRET
  },
  dbUrl: process.env.DB_TEST_URL
};
exports.config = config;