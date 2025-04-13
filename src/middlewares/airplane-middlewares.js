const { StatusCodes } = require("http-status-codes"); // 🔧 typo: StatusCodes not StatusCode

const { ErrorResponse } = require("../utils/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = 'something went wrong',
    ErrorResponse.error = { explaination:'Model number not found in enter data'}
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
