'use strict'

const Env = use('Env')

module.exports = {
  sentry: {
    dns: Env.get('SENTRY_DNS')
  }
}
