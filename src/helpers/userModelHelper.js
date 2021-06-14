import bcrypt from 'bcryptjs';

export function hashField(field, next) {
  if (!this.isModified(`${field}`)) {
    return next();
  }

  bcrypt.hash(this.field, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.field = hash;
    next();
  });
}

export function checkHashedField(field) {
  const fieldHash = this.field;
  return new Promise((resolve, reject) => {
    bcrypt.compare(field, fieldHash, (err, same) => {
      if (err) {
        return reject(err);
      }
      resolve(same);
    });
  });
}
