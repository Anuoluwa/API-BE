"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

var aws = require("aws-sdk");

var multer = require("multer");

var multerS3 = require("multer-s3");

var s3 = new aws.S3();

_dotenv["default"].config();

aws.config.update({
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  region: "eu-west-2"
});

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

var upload = multer({
  fileFilter: fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    metadata: function metadata(req, file, cb) {
      cb(null, {
        fieldName: "TESTING_METADATA"
      });
    },
    key: function key(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});
module.exports = upload;