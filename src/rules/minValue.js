module.exports = value => ({
  type: 'MIN_VALUE',
  value: value,
  generate (p) {
    return Math.max(this.value, p.currentValue)
  }
})
