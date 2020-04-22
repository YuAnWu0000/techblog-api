const Sequelize = require('sequelize');
const sequelize = require('../../services/sequelize');
const LamianDto = sequelize.define(
  'lamian', 
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(45)
    },
    soupRate: {
      type: Sequelize.DOUBLE
    },
    soupFeedback: {
      type: Sequelize.STRING(100)
    },
    noodleRate: {
      type: Sequelize.DOUBLE
    },
    noodleFeedback: {
      type: Sequelize.STRING(100)
    },
    BBQPorkRate: {
      type: Sequelize.DOUBLE
    },
    BBQPorkFeedback: {
      type: Sequelize.STRING(100)
    },
    BBQChickenRate: {
      type: Sequelize.DOUBLE
    },
    BBQChickenFeedback: {
      type: Sequelize.STRING(100)
    },
    eggRate: {
      type: Sequelize.DOUBLE
    },
    eggFeedback: {
      type: Sequelize.STRING(100)
    },
    sideDishesRate: {
      type: Sequelize.DOUBLE
    },
    sideDishesFeedback: {
      type: Sequelize.STRING(100)
    },
    cpValueRate: {
      type: Sequelize.DOUBLE
    },
    cpValueFeedback: {
      type: Sequelize.STRING(100)
    },
    overallRate: {
      type: Sequelize.DOUBLE
    },
    overallFeedback: {
      type: Sequelize.STRING(100)
    },
    imgSrc1: {
      type: Sequelize.STRING(45),
    },
    imgSrc2: {
      type: Sequelize.STRING(45),
    },
    imgSrc3: {
      type: Sequelize.STRING(45),
    }
  },
  {
    tableName: 'lamian'
  }
);
module.exports = LamianDto;