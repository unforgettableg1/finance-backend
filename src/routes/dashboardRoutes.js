const express = require('express');
const router = express.Router();

const { protect, authorizeRoles } = require('../middleware/auth');
const dashboardController = require('../controllers/dashboardController');

router.get(
  '/summary',
  protect,
  authorizeRoles('admin', 'analyst'),
  dashboardController.getSummary
);

module.exports = router;