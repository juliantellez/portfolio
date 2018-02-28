export default function recycle (p, particleList, recycleBin) {
  // remove from particleList
  if (particleList.first == p) {
    if (p.next != null) {
      p.next.prev = null
      particleList.first = p.next
    } else {
      particleList.first = null
    }
  } else {
    if (p.next == null) {
      p.prev.next = null
    } else {
      p.prev.next = p.next
      p.next.prev = p.prev
    }
  }
  // add to recycle bin
  if (recycleBin.first == null) {
    recycleBin.first = p
    p.prev = null
    p.next = null
  } else {
    p.next = recycleBin.first
    recycleBin.first.prev = p
    recycleBin.first = p
    p.prev = null
  }
}
