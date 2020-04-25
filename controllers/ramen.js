const RamenDto = require('../models/dto/ramen');

module.exports.getAllRamenRate = async (req, res) => {
  const result = await RamenDto.findAll();
  res.json({
    code: 1001,
    message: 'success',
    data: result,
  });
}
module.exports.getRamenRateById = async (req, res) => {
  const result = await RamenDto.findOne({ where: { id: req.params.id } });
  res.json({
    code: 1001,
    message: 'success',
    data: result,
  });
}