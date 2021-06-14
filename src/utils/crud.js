// export const createLoanParams = async (Model, data) => {
//   const doc = await Model.create({ ...data })
//     //const user = newUser
//     //.toObject({ versionKey: false })
//     .then((result) => result)
//     .catch((error) => error);
//   return doc;
// };

export const createLoanParams = async (Model, data) => {
  const { id } = data;
  const doc = await Model.findByIdAndUpdate(
    { _id: id },
    {
      $set: { ...data }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getMany = async (Model) => {
  const docs = await Model.find()
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};

export const getManyPrice = async (Model) => {
  const docs = await Model.find({}, { _id: 0 })
    .select('-__v -createdAt -updatedAt')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};

export const updateUserPassword = async (Model, email, newPassword) => {
  let updatedDoc = await Model.updateOne({ email: email }, { password: newPassword }, { new: true })
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return updatedDoc;
};

export const updateRecoveryToken = async (Model, email, token) => {
  let doc = await Model.updateOne(
    { email },
    {
      $set: {
        token,
        email,
        isValid: false
      }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getManyWithPopulate = async (Model, populateStr) => {
  const docs = await Model.find()
    .select('-password -blockchainAcct -blockchainPwd -roles -isVerified -address -__v')
    .populate(populateStr)
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};

export const getOneWithPopulate = async (Model, _id, populateStr) => {
  const docs = await Model.findById({ _id })
    .populate(populateStr, '-_id -__v -arrangementId')
    .select('-password')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};

export const createLoan = async (Model, UserModel, userId, loan) => {
  const doc = Model.create({ ...loan }).then((docLoan) => {
    return UserModel.findByIdAndUpdate(
      userId,
      { $push: { loans: docLoan._id } },
      { new: true, useFindAndModify: false }
    );
  });
  return doc;
};

export const getOne = async (Model, _id) => {
  const doc = await Model.findOne({ _id })
    .select('-password -__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getOneByClientId = async (Model, clientId) => {
  const doc = await Model.findOne({ clientId })
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const findBySingleField = async (Model, commodityCode) => {
  // User.findOne({ email }).select('email password').exec();
  const doc = await Model.findOne({ $or: [{ commodityCode }] })
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const findByField = async (Model, name, email, bvn, phone) => {
  // User.findOne({ email }).select('email password').exec();
  const doc = await Model.find({
    $or: [{ name }, { email }, { bvn }, { phone }]
  })
    .select('name email bvn')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const findRecovery = async (Model, email, token) => {
  const doc = await Model.findOne({
    $or: [{ email }, { token }]
  })
    .where('isValid')
    .equals(true)
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getOneByEmailUser = async (Model, email) => {
  const doc = await Model.findOne({ email })
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getByExtAdmin = async (Model, email) => {
  const doc = await Model.findOne({ email })
    .select('email password userType roles blockchainAcct blockchainPwd')
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getOneByEmail = async (Model, email) => {
  const doc = await Model.findOne({ email })
    .select(
      'email name password phone userType rcNumber bvn blockchainAcct oneWalletAcctNo isVerified clientId lockCount'
    )
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const removeOne = async (Model, _id) => {
  const removed = await Model.findOneAndRemove({
    _id: _id
  })
    .then((result) => result)
    .catch((error) => error);
  return removed;
};

export const updateById = async (_id) => {
  const user = await User.updateOne({ _id })
    .then((result) => result)
    .catch((error) => error);
  return user;
};

export const getOneById = async (Model, _id) => {
  try {
    const doc = await model.findOne({ createdBy: req.user._id, _id: req.params.id }).lean().exec();

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: doc });
  } catch (e) {
    res.status(400).end();
  }
};

export const createOrUpdatePrice = async (Model, commodityCode, price, owner) => {
  const createdBy = owner;
  const doc = await Model.findOneAndUpdate(
    { commodityCode },
    {
      $set: { commodityCode, price, createdBy }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const createOne = async (Model, data, owner) => {
  const createdBy = owner;
  const doc = await Model.create({ ...data, createdBy })
    //const user = newUser
    //.toObject({ versionKey: false })
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const createOneCommodity = async (Model, data) => {
  const doc = await Model.create({ ...data })
    //const user = newUser
    //.toObject({ versionKey: false })
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const updateOne = (model) => async (req, res) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        {
          createdBy: req.user._id,
          _id: req.params.id
        },
        req.body,
        { new: true }
      )
      .lean()
      .exec();

    if (!updatedDoc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: updatedDoc });
  } catch (e) {
    res.status(400).end();
  }
};

export const createIfExists = async (Model, data) => {
  const { username } = data;
  const doc = await Model.updateOne(
    { username },
    {
      $setOnInsert: { ...data }
    },
    { upsert: true, new: true }
  )
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const elevateAccount = async (Model, data) => {
  const { adminId, isVerified, roles } = data;
  const doc = await Model.findOneAndUpdate(
    { _id: adminId },
    {
      $set: { isVerified, roles }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getManyAdmin = async (Model) => {
  const docs = await Model.find()
    .select('-__v -password -blockchainAcct -blockchainPwd')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};

export const getAdminList = async (Model) => {
  const docs = await Model.find({ role: 'admin' })
    .select('-__v -password -blockchainAcct -blockchainPwd')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};

export const getOneAdminByEmail = async (Model, username) => {
  const doc = await Model.findOne({ username })
    .select('-__v -blockchainPwd -blockchainAcct')
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getManyLoanWithPopulate = async (Model, populateStr) => {
  const docs = await Model.find()
    .select('loans')
    .populate(populateStr)
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};

export const createLoanTransfer = async (Model, data) => {
  const doc = await Model.create({ ...data })
    //const user = newUser
    //.toObject({ versionKey: false })
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const updateUserProfile = async (Model, data, _id) => {
  const doc = await Model.findOneAndUpdate(
    { _id },
    {
      $set: { ...data }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const updatePassword = async (Model, data) => {
  const { _id, password } = data;
  const doc = await Model.findOneAndUpdate(
    { _id },
    {
      $set: { password }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getUserPassword = async (Model, _id) => {
  const doc = await Model.findOne({ _id })
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getUserEmail = async (Model, name) => {
  const doc = await Model.findOne({ name })
    .select('email oneWalletAcctNo')
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const updateLockCount = async (Model, data) => {
  const { lockCount, email } = data;
  const doc = await Model.findOneAndUpdate(
    { email },
    {
      $set: { lockCount }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getUserListedCommodities = async (Model, data) => {
  const { grade, commodityCode, warehouseCode, clientId } = data;
  const docs = await Model.find({ grade, commodityCode, warehouseCode, clientId })
    .select('volume')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};

export const createOrUpdateUser = async (Model, commodityCode, price, owner) => {
  const createdBy = owner;
  const doc = await Model.findOneAndUpdate(
    { commodityCode },
    {
      $set: { commodityCode, price, createdBy }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const updateUserUnlock = async (Model, data) => {
  const { _id, email } = data;
  const doc = await Model.findOneAndUpdate(
    { _id, email },
    {
      $set: { lockCount: '0' }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const getOneLoanWithPopulate = async (Model, _id, referenceId) => {
  const docs = await Model.findById({ _id })
    .populate({
      path: 'user',
      match: { loanSummary: { $elemMatch: { referenceId } } },
      select: 'loanSummary'
    })
    .select('-password')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return docs;
};

export const updateLoanStatus = async (Model, referenceId) => {
  let doc = await Model.updateOne(
    { referenceId },
    {
      $set: {
        status: 'paid'
      }
    },
    { upsert: true, new: true }
  )
    .select('-__v')
    .lean()
    .exec()
    .then((result) => result)
    .catch((error) => error);
  return doc;
};

export const crudControllers = (model) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
});
