'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var arp = require('arpjs');
var util = require('util');
var ip = require('ip');
var macaddr = require('node-macaddress').one();
var exec = require('child_process').exec;
var scanner = require('node-libnmap')
var done = false;


// req.connection.remoteAddress

router.get('/', function (req, res, next) {

  arp.table(function(err, table){
    console.log('Client IP: ', ip.address());
    res.status(200).send(table)
  })
});

router.put('/', function (req, res, next){
  console.log(req.body);
  res.status(200).send();
})
