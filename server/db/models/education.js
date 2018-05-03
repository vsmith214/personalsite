const Sequelize = require('sequelize');
const db = require('../db');

const Education = db.define('education', {
  school: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    description: Sequelize.TEXT,
    GPA: {
      type: Sequelize.FLOAT,
      validate: {
        min: 0.0,
        max: 4.0
      },
      allowNull: false
    },
    degree: {
      type: Sequelize.ENUM('None', 'Certificate', 'Bachelor\'s', 'Master\'s', 'Doctorate'),
      defaultValue: 'None'
    },
    areaOfStudy: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }
});

module.exports = Education;
