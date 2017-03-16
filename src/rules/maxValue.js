module.exports = value => ({
  type: 'MAX_VALUE',
  value: value,
  generate (p) {
    return Math.min(this.value, p.currentValue)
  }
})
