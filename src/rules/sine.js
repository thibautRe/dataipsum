module.exports = (amp, frequency, phase) => ({
  type: 'SINE',
  amplitude: amp || 1,
  frequency: frequency || 1,
  phase: phase || 0,
  generate (p) {
    return p.currentValue + this.amplitude * Math.sin(p.id * this.frequency + this.phase)
  }
})
