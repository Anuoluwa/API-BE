/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import uniqueValidator from 'mongoose-unique-validator';

mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: [true, 'email field is required'],
      trim: true
    },
    firstName: {
      type: String,
      required: [true, 'name field is required'],
      trim: true
      // min: [3, 'minimum length is three'],
      // max: [50, 'maximum length is fifty']
    },
    lastName: {
      type: String,
      required: [true, 'name field is required'],
      trim: true
      // min: [3, 'minimum length is three'],
      // max: [50, 'maximum length is fifty']
    },
    password: {
      type: String,
      required: [true, 'password is required']
      // minlength: [8, 'password must be at least eight characters'],
      // maxlength: [12, 'password must not be more than twelve characters']
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, ' role is required'],
      enum: ['customer', 'admin@pharmaserv', 'admin_supplier'],
      default: 'customer'
    },
    isVerified: { type: Boolean, default: false },
    lockCount: { type: String, trim: true, default: '0' },
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 12, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }
      resolve(same);
    });
  });
};

userSchema.plugin(uniqueValidator, {
  message: 'Error, {VALUE} already exist'
});

export const User = mongoose.model('user', userSchema);
