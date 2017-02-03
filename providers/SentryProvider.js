'use strict'

const ServiceProvder = require('adonis-fold').ServiceProvder

class SentryProvider extends ServiceProvder {

  * register () {
    this.app.singleton('Adonis/Addons/Sentry', function (app) {
      const Config = app.use('Adonis/Src/Config')
      const Sentry = require('../src/Sentry')
      return new Sentry(Config)
    })
  }

}

module.exports = SentryProvider
