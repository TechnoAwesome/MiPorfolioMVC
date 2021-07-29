const express = require('express');
const router = express.Router();
const {index,about} = require('../controllers/mainControllers');

router.get('/', index);
router.get('/about', about)

module.exports = router;