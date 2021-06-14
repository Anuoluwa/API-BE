export const getAllCustomersWithoutLoans = (User) => {
  const docs = User.find()
    .select('-__v -loans -password -blockchainAcct -isVerified -_id -createdAt -updatedAt')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};
