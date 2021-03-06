'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const view = require('./fizzbuzz/view')
const events = require('./fizzbuzz/events')
const storeActions = require('./fizzbuzz/store-actions')

$(() => {
  storeActions.initializeStore()
  events.addHandlers()
  view.onPageLoad()
})
