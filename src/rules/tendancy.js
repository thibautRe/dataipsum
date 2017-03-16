module.exports = value => ({
  type: 'TENDANCY',
  value: value,
  generate (p) {
    return this.value + p.currentValue
  }
})
