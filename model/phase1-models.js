// module.exports = async (sequelize, Sequelize) => {
//   const Pr_10 = sequelize.define('pr_10', {
//     id: {
//       allowNull: false,
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     field1: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//     },
//     field2: {
//       type: Sequelize.STRING,
//       allowNull: true,
//     },
//     field3: {
//       type: Sequelize.STRING,
//       allowNull: true,
//     },
//     field4: {
//       type: Sequelize.INTEGER,
//       allowNull: true,
//     },
//     field5: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     field6: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     field7: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//   });
//   return Pr_10;
// };

///////////////////////////////////////////////////////////////////////////////////
const Sequelize = require('sequelize');
const db = require('./connect-db');
const Pr_10 = db.define('pr_10', {
  id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  field1: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  field2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  field3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  field4: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  field5: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  field6: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  field7: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Pr_10.sync();
module.exports = Pr_10;
