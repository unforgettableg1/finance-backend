const express = require('express');
const router = express.Router();

const { protect, authorizeRoles } = require('../middleware/auth');
const userController = require('../controllers/userController');

router.get('/', protect, authorizeRoles('admin'), userController.getUsers);

router.put('/:id', protect, authorizeRoles('admin'), userController.updateUser);

module.exports = router;