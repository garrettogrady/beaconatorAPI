var args = process.argv;
var len = args[2];

var apiGenKey = module.exports = function(length) {
  length = length || 24;
  // Just produces random string using these chars
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';

  for (var i = length; i > 0; --i) {
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  }

  return result;
};

if (len && /^\d+$/.test(len)) {
  var key = apiGenKey(len);
  console.log(key);
}

