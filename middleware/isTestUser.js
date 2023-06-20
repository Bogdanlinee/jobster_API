const { BadRequestError } = require('../errors')

const isTestUser = async (req, res, next) => {
  if (req.user.userId === '6488ac5195141620c06cdaa0') {
    console.log('here');
    throw new BadRequestError('Read only');
  }
  next();
}

module.exports = isTestUser;