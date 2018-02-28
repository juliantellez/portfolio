import recycle from './recycle'

export default (particleList, recycleBin, nextParticle, sphereCenterZ, canvas, context, turnSpeed, turnAngle, radiusSP) => {
  var fLen
  var m
  var projCenterX
  var projCenterY
  var zMax

  var particleRad

  var zeroAlphaDepth
  var gravity

  // we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.
  var p

  var sinAngle
  var cosAngle
  var rotX, rotZ
  var depthAlphaFactor

  fLen = 320 // represents the distance from the viewer to z=0 depth.

  // projection center coordinates sets location of origin
  projCenterX = canvas.width / 2
  projCenterY = canvas.height / 2

  // we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).
  zMax = fLen - 2

  gravity = -0 // try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.

  particleRad = 2.5

  // alpha values will lessen as particles move further back, causing depth-based darkening:
  zeroAlphaDepth = -750

  // update viewing angle
  turnAngle = (turnAngle + turnSpeed) % (2 * Math.PI)
  sinAngle = Math.sin(turnAngle)
  cosAngle = Math.cos(turnAngle)

  // background fill
  context.fillStyle = '#161616'
  context.fillRect(0, 0, canvas.width, canvas.height)
  // update and draw particles
  p = particleList.first

  while (p != null) {
    // before list is altered record next particle
    nextParticle = p.next

    // update age
    p.age++

    // if the particle is past its "stuck" time, it will begin to move.
    if (p.age > p.stuckTime) {
      const DISPERSION = 0.5
      p.velX += p.accelX + DISPERSION * (Math.random() * 2 - 1)
      p.velY += p.accelY + DISPERSION * (Math.random() * 2 - 1)
      p.velZ += p.accelZ + DISPERSION * (Math.random() * 2 - 1)

      p.x += p.velX
      p.y += p.velY
      p.z += p.velZ
    }

    /*
        We are doing two things here to calculate display coordinates.
        The whole display is being rotated around a vertical axis,
        so we first calculate rotated coordinates for
        x and z (but the y coordinate will not change).
        Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
        */

    rotX = cosAngle * p.x + sinAngle * (p.z - sphereCenterZ)
    rotZ = -sinAngle * p.x + cosAngle * (p.z - sphereCenterZ) + sphereCenterZ
    m = radiusSP * fLen / (fLen - rotZ)
    p.projX = rotX * m + projCenterX
    p.projY = p.y * m + projCenterY

    // update alpha according to envelope parameters.
    if (p.age < p.attack + p.hold + p.decay) {
      if (p.age < p.attack) {
        p.alpha = (p.holdValue - p.initValue) / p.attack * p.age + p.initValue
      } else if (p.age < p.attack + p.hold) {
        p.alpha = p.holdValue
      } else if (p.age < p.attack + p.hold + p.decay) {
        p.alpha = (p.lastValue - p.holdValue) / p.decay * (p.age - p.attack - p.hold) + p.holdValue
      }
    } else {
      p.dead = true
    }

    const outsideViewRange = (
      (p.projX > canvas.width) ||
        (p.projX < 0) ||
        (p.projY < 0) ||
        (p.projY > canvas.height) ||
        (rotZ > zMax)
    )

    if (outsideViewRange || p.dead) {
      recycle(p, particleList, recycleBin)
    } else {
      const R = 235
      const G = 173
      const B = 67

      const rgbString = a => `rgba(${R},${G},${B},${a})`
      depthAlphaFactor = (1 - rotZ / zeroAlphaDepth)
      depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor < 0) ? 0 : depthAlphaFactor)
      context.fillStyle = rgbString(depthAlphaFactor * p.alpha)

      // draw
      context.beginPath()
      context.arc(p.projX, p.projY, m * particleRad, 0, 2 * Math.PI, false)
      context.closePath()
      context.fill()
    }

    p = nextParticle
  }
}
