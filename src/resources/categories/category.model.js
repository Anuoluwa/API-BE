import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const categorySchema = new mongoose.Schema(
    {
      category: {
        type: String,
        lowercase: true,
        required: [true, 'category field is required'],
        trim: true
      },
      description: {
        type: String,
        lowercase: true,
        trim: true
      },
      createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: [true, 'category field is required'],
      }
    },
    { timestamps: true }
  );

  export const Category = mongoose.model('category', categorySchema);