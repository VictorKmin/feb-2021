const fs = require('fs');
const path = require('path');
const uuid = require('uuid').v1;
const { promisify } = require('util');

const { responseCodesEnum } = require('../constants');
const { User } = require('../dataBase');
const { passwordHasher, userHelper } = require('../helpers');

const mkdirPromise = promisify(fs.mkdir);

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.find({}).lean();

    res.json(users);
  },

  createUser: async (req, res, next) => {
    try {
      const {
        avatar,
        body: { password }
      } = req;

      const hashedPassword = await passwordHasher.hash(password);
      const createdUser = await User.create({ ...req.body, password: hashedPassword });

      const { _id } = createdUser;

      if (avatar) {
        const { finalPath, photoPath } = await _photoDirBuilder(avatar.name, _id, 'users');
        await avatar.mv(finalPath);
        await User.updateOne({ _id }, { avatar: photoPath });
      }

      const normalizedUser = userHelper.userNormalizator(createdUser.toJSON());

      res.status(responseCodesEnum.CREATED).json(normalizedUser);
    } catch (e) {
      next(e);
    }
  },

  deleteUserById: (req, res) => {
    const { user } = req;

    res.status(responseCodesEnum.NO_CONTENT).json(user);
  },

  getUserById: (req, res) => {
    const { user } = req;

    console.log(user);

    res.json(userHelper.userNormalizator(user));
  },

  updateUsers: (req, res, next) => {
    try {
      const { body } = req;

      res.json(body);
    } catch (e) {
      next(e);
    }
  }
};

async function _photoDirBuilder(fileName, itemId, itemType) {
  const pathWithoutStatic = path.join(itemType, itemId.toString(), 'photos');
  const photoDirectory = path.join(process.cwd(), 'static', pathWithoutStatic);

  const fileExtension = fileName.split('.').pop();
  const photoName = `${uuid()}.${fileExtension}`;
  const finalPath = path.join(photoDirectory, photoName);

  await mkdirPromise(photoDirectory, { recursive: true });

  return {
    finalPath,
    photoPath: path.join(pathWithoutStatic, photoName)
  };
}
