const b = require('./b')

console.log('a中的',exports.x, exports)

exports.x = 'x'
require('./c')