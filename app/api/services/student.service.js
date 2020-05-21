const Student = require('../models/student.model');

const getAll = async () => Student.find({});
const getById = async (id) => Student.findOne({ id });
const update = async (id, body) => Student.findOneAndUpdate({ id }, body);
const updateBy = async (filter, body) =>  Student.updateMany(filter, {"$set": body});
const remove = async (id) => Student.findOneAndRemove({ id });
const create = async (body) => new Student({
  id: body.id,
  names: body.names,
  document: body.document,
  typeDocument: body.typeDocument,
  average: body.average,
}).save();

module.exports = {
    getAll,
    create,
    getById,
    update,
    remove,
    updateBy
  };