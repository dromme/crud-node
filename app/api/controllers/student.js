const service = require('../services/student.service');
const httpStatus = require('http-status');

exports.create = async (req, res) => {
  try {
    const { body } = req;

    await service.create(body);

    return res
      .status(httpStatus.CREATED)
      .send({ message: 'Created' });
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const ans = await service.getAll();
    if (!ans) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Not found :(' });
    }
    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const ans = await service.getById(id);

    if (!ans) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Not found :(' });
    }
    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

exports.update = async (req,res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    await service.update(id, body);

    return res
      .status(httpStatus.OK)
      .send({ message: 'Updated' });
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
}

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    await service.remove(id);

    return res
      .status(httpStatus.OK)
      .send({ message: 'Removed' });
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
};

exports.updateBy = async (req, res) => {
  try {
    const { property, value } = req.params;
    const { body } = req;

    const filter = new Object();
    filter[property] = value
    
    await service.updateBy(filter, body);

    return res
      .status(httpStatus.OK)
      .send({ message: 'Updated' });
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
};

exports.getAverage = async (req, res) => {
  try {
    const ans = await service.getAll();
    if (!ans) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Not found :(' });
    }
    const total = ans.reduce((total, student) => total + student.average ,0);
    const average = total / ans.length;

    return res
      .status(httpStatus.OK)
      .send({ average });
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};