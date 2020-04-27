const RamenRateDto = require('../models/dto/ramenRate');

module.exports.getAllRamenRates = async (req, res) => {
  const result = await RamenRateDto.findAll();
  res.json({
    code: 1001,
    message: 'success',
    data: result,
  });
}
module.exports.getRamenRateById = async (req, res) => {
  const result = await RamenRateDto.findOne({ where: { id: req.params.id } });
  res.json({
    code: 1001,
    message: 'success',
    data: result,
  });
}