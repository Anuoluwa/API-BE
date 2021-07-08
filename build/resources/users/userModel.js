"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

var _mobile;

_mongoose["default"].set('useCreateIndex', true);

var userSchema = new _mongoose["default"].Schema({
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
  mobile: (_mobile = {
    type: String,
    required: true,
    trim: true
  }, (0, _defineProperty2["default"])(_mobile, "required", [true, 'Password is required']), (0, _defineProperty2["default"])(_mobile, "minlength", [8, 'Password must be at least eight characters']), (0, _defineProperty2["default"])(_mobile, "maxlength", [16, 'Password must not be more than sixteen characters']), _mobile),
  role: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, ' role is required'],
    "enum": ['customer', 'admin@pharmaserv', 'admin_supplier'],
    "default": 'customer'
  },
  isVerified: {
    type: Boolean,
    "default": false
  },
  lockCount: {
    type: String,
    trim: true,
    "default": '0'
  }
}, {
  timestamps: true
});
userSchema.pre('save', function (next) {
  var _this = this;

  if (!this.isModified('password')) {
    return next();
  }

  _bcryptjs["default"].hash(this.password, 12, function (err, hash) {
    if (err) {
      return next(err);
    }

    _this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  var passwordHash = this.password;
  return new Promise(function (resolve, reject) {
    _bcryptjs["default"].compare(password, passwordHash, function (err, same) {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

userSchema.plugin(_mongooseUniqueValidator["default"], {
  message: 'Error, {VALUE} already exist'
});

var User = _mongoose["default"].model('user', userSchema);

exports.User = User;