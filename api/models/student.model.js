const createModel = require('../../util/util');

const schema = {
  id: {
    type: String,
    required: true,
  },
  names: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  typeDocument: {
    type: String,
    required: true,
  },
  average: {
    type: Number,
    required: true,
  }
};

const model = createModel('students', schema);

module.exports = model;