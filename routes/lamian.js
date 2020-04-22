const express = require('express');
const router = express.Router();
const lamianController = require('../controllers/lamian');

// middleware
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', lamianController.get);

module.exports = router;