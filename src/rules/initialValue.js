module.exports = value => ({
  type: 'INITIAL_VALUE',
  value: value,
  generate (p) {
    return p.id === 0 ? this.value : p.currentValue
  }
})
