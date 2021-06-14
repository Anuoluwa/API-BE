import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const productSchema = new mongoose.Schema(
    {
      productName: {
        type: String,
        lowercase: true,
        required: [true, 'category field is required'],
        trim: true
      },
      composition: {
        type: String,
        lowercase: true,
        required: [true, 'category field is required'],
        trim: true
      },
      approvedProductNo: {
        type: String,
        lowercase: true,
        required: [true, 'category field is required'],
        trim: true
      },
      expirationDate: {
        type: Date,
        lowercase: true,
        required: [true, 'date field is required'],
        trim: true,
        min: '2021-01-28'
      },
      costPerUnit: {
        type: String,
        lowercase: true,
        trim: true
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
      },
      supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "supplier"
      },
      createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
      }
    },
    { timestamps: true }
  );

  export const Product = mongoose.model('product', productSchema);