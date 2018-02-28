export default (newParticle, sphereCenterZ) => {
  const gravity = -0

  // initialize
  const DISPLACEMENT = 0.002
  const phase = Math.acos(Math.random() * 2 - 1)
  const RADIUS = 315
  const theta = Math.random() * 2 * Math.PI

  newParticle.x = RADIUS * Math.sin(phase) * Math.cos(theta)
  newParticle.y = RADIUS * Math.sin(phase) * Math.sin(theta)
  newParticle.z = sphereCenterZ + RADIUS * Math.cos(phase)
  newParticle.velX = DISPLACEMENT * newParticle.x
  newParticle.velY = DISPLACEMENT * newParticle.y
  newParticle.velZ = DISPLACEMENT * newParticle.z
  newParticle.age = 0
  newParticle.dead = false

  if (Math.random() < 0.5) {
    newParticle.right = true
  } else {
    newParticle.right = false
  }

  // we set some "envelope" parameters which will control the evolving alpha of the particles.
  newParticle.attack = 50
  newParticle.hold = 50
  newParticle.decay = 100
  newParticle.initValue = 0
  newParticle.holdValue = 1
  newParticle.lastValue = 0

  // the particle will be stuck in one place until this time has elapsed:
  newParticle.stuckTime = 90 + Math.random() * 20

  newParticle.accelX = 0
  newParticle.accelY = gravity
  newParticle.accelZ = 0

  return newParticle
}
