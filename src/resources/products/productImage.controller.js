const upload = require("../../utils/upload");

import { Product } from './product.model'

const singleUpload = upload.single("image");
const uploadProductImage =  (req, res)  => {
    const productId = req.params.id;
  
    singleUpload(req, res, function (err) {
      if (err) {
        return res.json({
          success: false,
          errors: {
            title: "Image Upload Error",
            detail: err.message,
            error: err,
          },
        });
      }
  
      let update = { productPhotoURL: req.file.location };
  
      Product.findByIdAndUpdate(productId, update, { new: true })
        .then((product) => res.status(200).json({ success: true, product }))
        .catch((err) => res.status(400).json({ success: false, error: err }));
    });
  }

  export default uploadProductImage;