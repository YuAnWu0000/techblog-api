const validation = require('../models/validate');
const HttpException = require('../extensions/httpException');

module.exports.requestValidation = async (req, res, next) => {
  try {
    const request = new validation.getAllRamenRatesRequest(req.query);
    const validateResult = request.validate();
    if (!validateResult.pass) {
      throw new HttpException(400, validateResult.err);
    } else {
      return next();
    }
  } catch (err) {
    res.status(err.code).send(err.message);
  }
}