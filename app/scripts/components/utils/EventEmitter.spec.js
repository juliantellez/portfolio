/* eslint-disable no-unused-expressions */

import { expect } from 'chai'
import sinon from 'sinon'

import EventEmitter from './EventEmitter'

describe('EventEmitter', () => {
  it('should register events', () => {
    const emitter = new EventEmitter()
    const eventId = 'dummy-event'
    const eventCallBack = () => ({})

    emitter.on(eventId, eventCallBack)
    expect(eventCallBack).to.equal(emitter.listeners[eventId])
  })

  it('on event should return unsubscribe func', () => {
    const emitter = new EventEmitter()
    const eventId = 'dummy-event'
    const eventCallBack = () => ({})

    const unsubscribe = emitter.on(eventId, eventCallBack)

    unsubscribe()

    const event = emitter.listeners[eventId]
    expect(event).to.be.undefined
  })

  it('off should remove event', () => {
    const emitter = new EventEmitter()
    const eventId = 'dummy-event'
    const eventCallBack = () => ({})

    emitter.on(eventId, eventCallBack)
    expect(eventCallBack).to.equal(emitter.listeners[eventId])

    emitter.off(eventId)
    const event = emitter.listeners[eventId]
    expect(event).to.be.undefined
  })

  it('should emit data', () => {
    const emitter = new EventEmitter()
    const eventId = 'dummy-event'
    const eventCallBack = sinon.stub()

    emitter.on(eventId, eventCallBack)
    const data = 'dummy-data'
    emitter.emit(data)

    expect(eventCallBack.called).to.be.true
    const [[ args ]] = eventCallBack.args
    expect(args).to.equal(data)
  })
})
