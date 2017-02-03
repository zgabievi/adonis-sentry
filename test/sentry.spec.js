'use strict'

const Sentry = require('../src/Sentry')
const chai = require('chai')
const expect = chai.expect
require('co-mocha')

const config = {
  get () {
    return 'https://TEST@sentry.io/ID'
  }
}

describe('Sentry', () => {
  it('shuold have same dns in raven', function* () {
    const s = new Sentry(config)
    const client = s.getClient()

    expect(client.raw_dsn).to.equal(config.get())
  })
})
