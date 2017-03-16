const dataipsum = require('../index.js')

const a = dataipsum.curve()
// .initialValue(4)
// .chaos(5)
// .minValue(0)
.tendancy(1)
.sine(4)
.generate(10)

console.log(a)
