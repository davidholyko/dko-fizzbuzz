const store = require('../store')

const initializeStore = () => {
  console.log('initializeStore')
  store.inputs = []
  store.numbers = []
  store.words = []
  store.defaultNumbers = []
  store.defaultWords = []
  store.addedNumbers = []
  store.addedWords = []
}

const resetStore = () => {
  store.numbers = []
  store.words = []
  store.inputs = []
  store.addedNumbers = []
  store.addedWords = []
}

module.exports = {
  initializeStore,
  resetStore
}
