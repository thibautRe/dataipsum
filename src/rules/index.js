const initialValueRule = require('../rules/initialValue.js')
const tendancyRule = require('../rules/tendancy.js')
const minValueRule = require('../rules/minValue.js')
const maxValueRule = require('../rules/maxValue.js')
const chaosRule = require('../rules/chaos.js')
const sineRule = require('../rules/sine.js')

module.exports = [
  {name: 'initialValue', rule: initialValueRule},
  {name: 'minValue', rule: minValueRule},
  {name: 'maxValue', rule: maxValueRule},
  {name: 'tendancy', rule: tendancyRule},
  {name: 'chaos', rule: chaosRule},
  {name: 'sine', rule: sineRule}
]
