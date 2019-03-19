const store = require('../store')
const view = require('./view')

const onNumberClick = () => {
  console.log('onNumberClick')
  event.preventDefault()

  const number = $(event.target).data('number')
  if (store.numbers.includes(number)) { return }

  view.changeColor(event)
  store.numbers.push(number)
  console.log(store)
}

const onWordClick = () => {
  console.log('onWordClick')
  event.preventDefault()

  const word = $(event.target).data('word')
  if (store.words.includes(word)) { return }

  view.changeColor(event)
  store.words.push(word)
  console.log(store)
}

const addHandlers = () => {
  $('#numbers').on('click', '.number', onNumberClick)
  $('#words').on('click', '.word', onWordClick)
}

module.exports = {
  addHandlers
}
