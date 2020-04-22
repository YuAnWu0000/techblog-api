const LamianDto = require('../models/dto/lamian');
module.exports.get = async (req, res) => {
  const result = await LamianDto.findOne({ where: { id: 1 } });
  console.log(result.dataValues);
  res.json({
    code: 1001,
    message: 'success',
    data: result,
  });
}