const RamenDto = require('../models/dto/ramen');

module.exports.get = async (req, res) => {
  const result = await RamenDto.findAll();
  res.json({
    code: 1001,
    message: 'success',
    data: result,
  });
}