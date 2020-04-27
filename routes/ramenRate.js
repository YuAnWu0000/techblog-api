const express = require('express');
const router = express.Router();
const ramenRateController = require('../controllers/ramenRate');

// middleware
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/all', ramenRateController.getAllRamenRates);
router.get('/:id', ramenRateController.getRamenRateById);

module.exports = router;