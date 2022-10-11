const express = require('express');

const router = express.Router();

const { getUsers,  createUser, getSingleUser, deleteUser, updateUser} = require('../controllers/userController');



router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getSingleUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

module.exports = router;