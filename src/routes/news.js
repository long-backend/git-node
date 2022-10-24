const express = require('express');
const router = express.Router();

const Newscontroller = require('../app/controllers/Newscontrollers');
router.use('/:slug', Newscontroller.show);
router.use('/', Newscontroller.index);

module.exports = router;
