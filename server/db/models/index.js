const User = require('./user');
const Education = require('./education');

Education.belongsTo(User);

module.exports = {
  User,
  Education
}
