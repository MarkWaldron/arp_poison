'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

router.get('/', function (req, res) {
  res.status(200).send()
});
