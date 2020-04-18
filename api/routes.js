const {Router} = require('express');
const router = new Router();

const students = require('./routes/student.route');

router.use('/students', students);

module.exports = router;
