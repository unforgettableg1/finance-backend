const express = require('express');
const router = express.Router();

const recordController = require('../controllers/recordController');
const { protect, authorizeRoles } = require('../middleware/auth');

// ✅ CORRECT ORDER: protect → authorizeRoles

router.post(
  '/',
  protect,
  authorizeRoles('admin'),
  recordController.createRecord
);

router.get(
  '/',
  protect,
  authorizeRoles('admin', 'analyst'),
  recordController.getRecords
);

router.put(
  '/:id',
  protect,
  authorizeRoles('admin'),
  recordController.updateRecord
);

router.delete(
  '/:id',
  protect,
  authorizeRoles('admin'),
  recordController.deleteRecord
);

module.exports = router;