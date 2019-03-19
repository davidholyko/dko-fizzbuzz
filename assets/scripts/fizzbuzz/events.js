const store = require('../store')
const view = require('./view')
const fizzbuzz = require('./fizzbuzz')
const getFormFields = require('../../../lib/get-form-fields')

const onNumberClick = () => {
  console.log('onNumberClick')
  event.preventDefault()

  const number = $(event.target).data('number')
  const word = $(event.target).data('word')
  if (store.inputs.includes(number)) { return }

  view.changeColor(event)
  store.inputs.push({number, word})
  store.numbers.push(number)
  store.words.push(word)
  console.log(store)
}

const onFizzBuzzClick = () => {
  console.log('onFizzBuzzClick')

  const maxValue = getFormFields(event.target)
  fizzbuzz(store.inputs, maxValue)
}

const addHandlers = () => {
  $('#numbers').on('click', '.number', onNumberClick)
  $('#fizzbuzz-button').on('click', onFizzBuzzClick)
}

module.exports = {
  addHandlers
}
