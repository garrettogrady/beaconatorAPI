// This necessary to do before any require('config')
// calls so process.NODE_ENV is set for node-config.
require('../config/default');

// Require all tasks
require('./tasks');
