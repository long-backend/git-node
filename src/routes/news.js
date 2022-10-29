const express = require('express');
const router = express.Router();

const Newscontroller = require('../app/controllers/Newscontrollers');
router.get('/:slug', Newscontroller.show);
router.get('/', Newscontroller.index);

module.exports = router;