const store = require('../store')
const storeActions = require('./store-actions')
const htmlActions = require('./html-actions')
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
  console.log('onFizzBuzzClick')
  event.preventDefault()

  $('#fizzbuzz-output').empty()
  view.resetColors()

  if (!store.numbers.length) { htmlActions.displayEmpty() }

  const input = getFormFields(event.target)
  fizzbuzz(store.inputs, input.maxValue)
  storeActions.resetStore()
}

const onGenerateNumber = () => {
  console.log('onGenerateNumber')
  event.preventDefault()
  const input = getFormFields(event.target)

  if (store.addedNumbers.includes(input.number.toString())) { return htmlActions.displayErrorMessage(input.number) }
  if (store.addedWords.includes(input.word)) { return htmlActions.displayErrorMessage(input.word) }
  if (store.defaultNumbers.includes(input.number.toString())) { return htmlActions.displayErrorMessage(input.number) }
  if (store.defaultWords.includes(input.word)) { return htmlActions.displayErrorMessage(input.word) }

  store.addedNumbers.push(input.number)
  store.addedWords.push(input.word)

  const element =
    `<button
    id="number-${input.number}"
    data-number=${input.number}
    data-word=${input.word}
    data-toggle="tooltip"
    data-container="body"
    title="Add { Number ${input.number}: Word ${input.word} } to arguments"
    class="number">${input.number}</button>`
  $('#numbers').append(element)

  $('form').trigger('reset')

  console.log(store)
}

const addHandlers = () => {
  $('#numbers').on('click', '.number', onNumberClick)
  $('#max-value-form').on('submit', onFizzBuzzClick)
  $('#generate-button-form').on('submit', onGenerateNumber)
  $('body').tooltip({ selector: '[data-toggle="tooltip"]', trigger: 'hover' })
}

module.exports = {
  addHandlers
}
