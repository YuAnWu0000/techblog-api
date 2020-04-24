const express = require('express');
const router = express.Router();
const ramenController = require('../controllers/ramen');

// middleware
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', ramenController.get);

module.exports = router;