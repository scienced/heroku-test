// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const trades = sequelizeClient.define('trades', {
    trader: {
      type: DataTypes.STRING, 
    },
    tradeTime: {
      type: DataTypes.DATE, 
    },
    fy: {
      type: DataTypes.STRING, 
    },
    bookId: {
      type: DataTypes.STRING, 
    },
    tradeType: {
      type: DataTypes.STRING, 
    },
    buysell: {
      type: DataTypes.STRING, 
    },
    quantity: {
      type: DataTypes.DOUBLE, 
    },
    rate: {
      type: DataTypes.DOUBLE, 
    },
    currency: {
      type: DataTypes.STRING, 
    },




  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  trades.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return trades;
};
