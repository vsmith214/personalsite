const Sequelize = require('sequelize');
const db = require('../db');

const Education = db.define('education', {
  school: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  description: Sequelize.TEXT,
  GPA: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0
    },
  },
  degree: {
    type: Sequelize.ENUM('None', 'Certificate', 'Bachelors', 'Masters', 'Doctorate'),
    defaultValue: 'None',
  },
  areaOfStudy: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Education;
