const express = require('express');
const userControl = require('../controllers/userController');

const router = express.Router();

router.get('/users', userControl.showUsers);
router.get('/users/:id', userControl.showUserById);

router.post('/users', userControl.createUser);

router.put('/user/:id', userControl.updateUser);

router.delete('/users/:id', userControl.deleteUser);

module.exports = router;