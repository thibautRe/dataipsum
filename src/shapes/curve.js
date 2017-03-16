const rules = require('../rules/index.js')

function Curve () {
  this._rules = []
  return this
}

for (let i = 0; i < rules.length; i++) {
  const rule = rules[i]
  Curve.prototype[rule.name] = function () {
    this._rules.push(rule.rule.apply(null, arguments))
    return this
  }
}

Curve.prototype.generate = function (nPoints) {
  let points = []
  let value = 0
  for (let n = 0; n < nPoints; n++) {
    for (let i = 0; i < this._rules.length; i++) {
      const rule = this._rules[i]
      const ruleGenerate = rule.generate({
        id: n,
        currentValue: value
      })

      if (typeof ruleGenerate === 'number') {
        value = ruleGenerate
      } else {
        value = ruleGenerate.value
      }
    }

    points.push(value)
  }

  return points
}

const curve = () => new Curve()

module.exports = curve
