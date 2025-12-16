const express = require('express');
const router = express.Router();
const authenticateUser = require('#middlewares/auth.middleware');
const userController = require('#controllers/user.controller');

// POST /register
router.post('/sign-up', userController.SignUp);
router.post('/sign-in', userController.SignIn);
router.get('/', userController.GetUsers);
router.get('/:id', userController.GetUserById);
router.put('/:id', authenticateUser, userController.UpdateUser);
router.delete('/:id', authenticateUser, userController.DeleteUser);


module.exports = router;