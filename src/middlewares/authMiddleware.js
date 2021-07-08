/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
import jwt from 'jsonwebtoken';
import crypto from 'crypto-random-string';
import bcrypt from 'bcryptjs';
import config from '../config';
import { User } from '../resources/users/userModel';
import { failure } from '../helpers/response';
import { findByField, getOneByEmailUser } from '../utils/crud';
// import redisConnection from '../queues/queues/connection';


export const newToken = (user) => {
  const tokenResult = jwt.sign(
    {
      id: user._id,
      email: user.email,
      roles: user.roles,
      isVerified: user.isVerified
    },
    config.secrets.jwt,
    {
      expiresIn: config.secrets.jwtExp
    }
  );
  // redisConnection.set(`${user._id}-token`, tokenResult, 'EX', 60 * 60 * 24);
  return tokenResult;
};

export const verifyToken = async (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

export const protect = async (req, res, next) => {
  if (!req.headers.authorization || req.headers.authorization === '') {
    return res.status(400).json({
      status: 401,
      error: 'Headers key: "Authorization" is required'
    });
  }
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).json({ authorized: 'Invalid token' });
  }

  const token = bearer.split('Bearer ')[1].trim();
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).json({ Unauthorized: 'Invalid token' });
  }
  const { id } = payload;

  // const cachedToken = await redisConnection.get(`${id}-token`);
  // if (!cachedToken || token !== cachedToken) {
  //   return failure(401, 'Session timeout, please log in', res);
  // }

  const user = await User.findById(payload.id).select('-password').lean().exec();

  if (!user) {
    return res.status(401).json({ Unauthorized: 'Invalid token' });
  }

  req.user = user;
  next();
};

export const updateIsVerified = async (_id) => {
  const user = await User.findOneAndUpdate(
    { _id: _id, isVerified: false },
    { isVerified: true },
    {
      new: true
    }
  )
    .then((result) => result)
    .catch((error) => error);
  return user;
};

export const generatePwd = async () => {
  // eslint-disable-next-line no-return-await
  return await bcrypt.hash(`${crypto({ length: 10, type: 'base64' })}${Date.now()}`, 8);
};

export const protectAdmin = async (req, res, next) => {
  if (!req.headers.authorization || req.headers.authorization === '') {
    return res.status(400).json({
      status: 401,
      error: 'Headers key: "Authorization" is required'
    });
  }
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).json({ authorized: 'Invalid token' });
  }

  const token = bearer.split('Bearer ')[1].trim();
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).end();
  }

  const admin = await Admin.findById(payload.id).select('-password').lean().exec();

  if (!admin) {
    return res.status(401).json({ authorized: 'Invalid token' });
  }

  req.admin = admin;
  next();
};

export const bvnExists = async (req, res) => {
  const { bvn } = req.body;
  const bvnValid = await bvnChecker({ bvn });
  //if (!bvnValid) return failure(409, 'BVN does not exist', res);
  //return next();
};


export const checkExistingValues = async (req, res, next) => {
  const {
    body: { name, email, bvn, phone }
  } = req;
  const result = await findByField(User, name, email, bvn, phone);
  const inputName = result.find((item) => item.name === name);
  const inputEmail = result.find((item) => item.email === email);
  const inputBvn = result.find((item) => item.bvn === bvn);
  const inputPhone = result.find((item) => item.phone === phone);

  if (result.length > 0 && inputName !== undefined && [inputName].length > 0) {
    return failure(422, `name: ${name} already exists`, res);
  }
  if (result.length > 0 && inputEmail !== undefined && [inputEmail].length > 0) {
    return failure(400, `email: ${email} already exists`, res);
  }
  if (result.length > 0 && inputBvn !== undefined && [inputBvn].length > 0) {
    return failure(422, `BVN: ${bvn} already exists`, res);
  }
  if (result.length > 0 && inputPhone !== undefined && [inputPhone].length > 0) {
    return failure(422, `phone: ${phone} already exists`, res);
  }
  next();
};

export const adminEmailFormat = async (req, res, next) => {
  const { email } = req.body;
  const emailSuffix = email.split('@')[1];
  if (emailSuffix !== 'sterling.ng') {
    return failure(401, 'Access Denied, unauthorized email', res);
  }
  next();
};

export const checkAdminEmail = async (req, res, next) => {
  const {
    body: { email }
  } = req;
  const adminEmail = await getOneByEmailUser(Admin, email);
  if (adminEmail !== null) {
    return failure(401, 'Email already exists', res);
  }
  next();
};

export const checkOldPassword = async (req, res, next) => {
  const {
    body: { email, token, newPassword }
  } = req;
  const user = await getOneByEmailUser(User, email);
  if (user == null) {
    return failure(401, 'Email does not exist', res);
  }
  const validPassword = await bcrypt.compare(newPassword, user.password);
  if (validPassword) {
    return failure(401, 'Please use a new password', res);
  }
  next();
};
