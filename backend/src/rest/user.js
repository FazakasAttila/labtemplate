var express = require('express');
var router = express.Router();
var user = require('../service/').user;

router.get('/', user.list);
router.get('/:ID', user.findById);
router.post('/', user.create);
// router.put('/:id',user.update);
router.delete('/:ID', user.delete);
module.exports = router;
