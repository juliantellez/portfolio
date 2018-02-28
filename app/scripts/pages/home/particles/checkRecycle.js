export default (particleList, recycleBin) => {
  var newParticle
  if (recycleBin.first != null) {
    newParticle = recycleBin.first
    // remove from bin
    if (newParticle.next != null) {
      recycleBin.first = newParticle.next
      newParticle.next.prev = null
    } else {
      recycleBin.first = null
    }
  } else {
    // if the recycle bin is empty, create a new particle (a new ampty object):
    newParticle = {}
  }

  // add to beginning of particle list
  if (particleList.first == null) {
    particleList.first = newParticle
    newParticle.prev = null
    newParticle.next = null
  } else {
    newParticle.next = particleList.first
    particleList.first.prev = newParticle
    particleList.first = newParticle
    newParticle.prev = null
  }
  return newParticle
}
