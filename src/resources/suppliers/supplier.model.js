import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const supplierSchema = new mongoose.Schema(
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
          ref: "user"
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

  export const Supplier = mongoose.model('supplier', supplierSchema);