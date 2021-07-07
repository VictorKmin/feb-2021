const router = require('express').Router();

const userController = require('../controllers/user.controller');
const { userMiddleware } = require('../middlewares');

router.get('/', userController.getAllUsers);

router.post('/',
  userMiddleware.checkUserValidity,
  userMiddleware.checkIsEmailExist,
  userController.createUser);

router.use('/:userId', userMiddleware.getUserByDynamicParam('userId', 'params', '_id'));
router.use(userMiddleware.checkUserRole(['admin']));

// router.route('/:userId')
//   .post(userController.deleteUserById)
//   .get(userController.getUserById)
//   .delete(userController.deleteUserById);

router.delete('/:userId', userController.deleteUserById);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUsers);

module.exports = router;
