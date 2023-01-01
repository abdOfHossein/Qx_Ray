module.exports = (sequelize, Sequelize) => {
  const Phase_1 = sequelize.define('phase_1', {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    field1: {
      type: Sequelize.NUMBER,
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
      type: Sequelize.NUMBER,
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
  return Phase_1;
};
