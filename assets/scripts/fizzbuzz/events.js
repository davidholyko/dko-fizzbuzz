const store = require('../store')
const storeActions = require('./store-actions')
const view = require('./view')
const fizzbuzz = require('./fizzbuzz')
const getFormFields = require('../../../lib/get-form-fields')

const onNumberClick = () => {
  console.log('onNumberClick')
  event.preventDefault()

  const number = $(event.target).data('number')
  const word = $(event.target).data('word')
  if (store.numbers.includes(number)) { return }

  view.changeColor(event)
  store.inputs.push({number, word})
  store.numbers.push(number)
  store.words.push(word)
}

const onFizzBuzzClick = () => {
  console.log('inputMaxValue')
  event.preventDefault()

  $('#fizzbuzz-output').empty()
  view.resetColors()

  const input = getFormFields(event.target)
  fizzbuzz(store.inputs, input.maxValue)
  storeActions.resetStore()
}

const onGenerateNumber = () => {
  console.log('onGenerateNumber')
  event.preventDefault()
  const input = getFormFields(event.target)

  if (store.addedNumbers.includes(input.number)) { return }
  if (store.addedWords.includes(input.word)) { return }

  store.addedNumbers.push(input.number)
  store.addedWords.push(input.word)

  const element =
    `<button
    id="number-${input.number}"
    data-number=${input.number}
    data-word=${input.word}
    class="number">${input.number}</button>`
  $('#numbers').append(element)
}

const addHandlers = () => {
  $('#numbers').on('click', '.number', onNumberClick)
  $('#max-value-form').on('submit', onFizzBuzzClick)
  $('#generate-button-form').on('submit', onGenerateNumber)
}

module.exports = {
  addHandlers
}
