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
      required: [true, 'Email is required'],
      trim: true,
      min: [3, 'Email minimum length is three'],
      max: [50, 'Email  maximum length is fifty']
    },
    firstName: {
      type: String,
      required: [true, 'Firstname is required'],
      trim: true,
      min: [1, 'Firstname cannot be empty'],
      max: [50, 'Firstname maximum length must be fifty']
    },
    lastName: {
      type: String,
      required: [true, 'Lastname is required'],
      trim: true,
      min: [1, 'Lastname cannot be empty'],
      max: [50, 'Lastname maximum length must be  fifty']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least eight characters'],
      maxlength: [16, 'Password must not be more than sixteen characters']
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least eight characters'],
      maxlength: [16, 'Password must not be more than sixteen characters']
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
