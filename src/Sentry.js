'use static'

const Raven = require('raven')
const pkg = require('../package.json')

class Sentry {

  constructor (config) {
    Raven.config(config.get('services.sentry.dns'), {
      name: pkg.name,
      version: pkg.version
    }).install()
  }

  capture (e) {
    this.eventId = Raven.captureException(e, (error, eventId) => {
      if (error) {
        console.error('Failed to send captured exception to Sentry')
      } else {
        console.log('Captured exception and send to Sentry successfully')
      }
    })
  }

  getClient () {
    return Raven
  }
}

module.exports = Sentry
