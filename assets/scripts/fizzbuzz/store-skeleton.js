const store = require('../store')

const initializeStore = () => {
  console.log('initializeStore')
  store.numbers = []
  store.words = []
  store.inputs = []
}

const resetStore = () => {
  store.numbers = []
  store.words = []
  store.inputs = []
}

module.exports = {
  initializeStore,
  resetStore
}
