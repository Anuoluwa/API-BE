"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _product = require("./product.model");

var upload = require("../../utils/upload");

var singleUpload = upload.single("image");

var uploadProductImage = function uploadProductImage(req, res) {
  var productId = req.params.id;
  singleUpload(req, res, function (err) {
    if (err) {
      return res.json({
        success: false,
        errors: {
          title: "Image Upload Error",
          detail: err.message,
          error: err
        }
      });
    }

    var update = {
      productPhotoURL: req.file.location
    };

    _product.Product.findByIdAndUpdate(productId, update, {
      "new": true
    }).then(function (product) {
      return res.status(200).json({
        success: true,
        product: product
      });
    })["catch"](function (err) {
      return res.status(400).json({
        success: false,
        error: err
      });
    });
  });
};

var _default = uploadProductImage;
exports["default"] = _default;