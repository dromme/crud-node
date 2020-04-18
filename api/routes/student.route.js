const { Router } = require('express');
const controller = require('../controllers/student');

const router = new Router();

router.route('/')
  .get((req, res) => controller.getAll(req, res))
  .post((req, res) => controller.create(req, res))

router.route('/:id')
  .get((req, res) => controller.getById(req, res))
  .put((req, res) => controller.update(req, res))
  .delete((req, res) => controller.remove(req, res));

router.route('/:property/:value')
  .put((req, res) => controller.updateBy(req, res))

module.exports = router;