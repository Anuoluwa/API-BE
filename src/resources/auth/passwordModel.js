import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const passwordRecoverySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true
    },
    token: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    isValid: {
      type: Boolean,
      default: true
    }
    //createdAt: { type: Date, expires: 600, default: Date.now }
  },
  { timestamps: true }
);

passwordRecoverySchema.index({ createdAt: 1 }, { expireAtAfterSeconds: 600 });

export const PasswordRecovery = mongoose.model('passwordrecovery', passwordRecoverySchema);

// createdAt: {
//   type: Date,
//   required: true,
//   default: Date.now,
//   expires: 43200
// }
