const RamenRateDto = require('../models/dto/ramenRate');
const HttpException = require('../extensions/httpException');

module.exports.getAllRamenRates = async (req, res) => {
  try {
    const result = await RamenRateDto.findAll();
    res.json({
      code: 1001,
      message: 'success',
      data: result,
    });
  } catch (err) {
    console.log(err.message);
    const code = err.code || 503;
    res.status(code).send(err.message);
  }
}
module.exports.getRamenRateById = async (req, res) => {
  const result = await RamenRateDto.findOne({ where: { id: req.params.id } });
  res.json({
    code: 1001,
    message: 'success',
    data: result,
  });
}