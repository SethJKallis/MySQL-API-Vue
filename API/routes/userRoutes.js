const express = require('express');
const userControl = require('../controllers/userController');

const router = express.Router();

router.get('/users', userControl.showUsers);
router.get('/users/:id', userControl.showUserById);

router.post('/users', userControl.createUser);

router.put('/users/:id', userControl.updateUser);

router.delete('/users/:id', userControl.deleteUser);

router.get('/login/', userControl.userLogin)

module.exports = router;