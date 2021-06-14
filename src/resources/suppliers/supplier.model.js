import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const productSchema = new mongoose.Schema(
    {
      supplierName: {
        type: String,
        lowercase: true,
        required: [true, 'name field is required'],
        trim: true
      },
      mobile: {
        type: String,
        lowercase: true,
        required: [true, 'mobile field is required'],
        trim: true
      },
      email: {
        type: String,
        lowercase: true,
        required: [true, 'email field is required'],
        trim: true
      },
      location: {
        type: String,
        lowercase: true,
        trim: true
      },
      address: {
        type: String,
        lowercase: true,
        required: [true, 'address field is required'],
        trim: true
      },
      url: {
        type: String,
        lowercase: true,
        trim: true
      },
      isVerified: { type: Boolean, default: false },
      supplierRep: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ],
      createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
      }
    },
    
    { timestamps: true }
  );

  export const Product = mongoose.model('product', productSchema);