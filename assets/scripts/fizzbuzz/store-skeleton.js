const store = require('../store')

const initializeStore = () => {
  console.log('initializeStore')
  store.numbers = []
  store.words = []
}

const resetStore = () => {
  store.numbers = []
  store.words = []
}

module.exports = {
  initializeStore,
  resetStore
}
