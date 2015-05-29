var iconv = require('iconv-lite');
var ch = '0';
var str = iconv.decode(new Buffer([40]), 'ascii');

var d = 59392;
console.log(d.toString(16));

/** 59392 = \e800 */
