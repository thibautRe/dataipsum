module.exports = (amp, order) => ({
  type: 'CHAOS',
  amplitude: amp,
  order: order,
  generate (p) {
    // TODO take order into account
    return p.currentValue + (Math.random() - 0.5) * this.amplitude
  }
})
