const store = require('../store')

const generateButtons = () => {
  console.log('generateButtons')
  const words = ['fizz', 'bizz', 'buzz', 'fuzz', 'fazz', 'bazz', 'fezz', 'bezz', 'fozz', 'bozz']
  for (let i = 3; i < 13; i++) {
    const element =
    `<button
     id="number-${i}"
     data-number=${i}
     data-word=${words[i - 3]}
     data-toggle="tooltip"
     data-html="true"
     title="Add { Number ${i}: Word ${words[i - 3]} } to fizzbuzz rules"
     class="number">${i}</button>`
    $('#numbers').append(element)
    store.defaultNumbers.push(i.toString())
  }

  store.defaultWords = words
}

const changeColor = event => {
  $(event.target).addClass('number-picked')
}

const resetColors = () => { $('#numbers').children().removeClass('number-picked') }

const setOutputHeight = () => {
  const elementOne = $('#page-header').outerHeight()
  const elementTwo = $('#numbers').outerHeight()
  const elementThree = $('#user-feedback').outerHeight()
  const elementFour = $('#forms').outerHeight()
  const remainingHeight = elementOne + elementTwo + elementThree + elementFour
  const pageHeight = $('body').height()
  $('#fizzbuzz-output').height(pageHeight - remainingHeight - 16)
}

const onPageLoad = () => {
  generateButtons()
  // setOutputHeight()
  // $(window).resize(setOutputHeight)
}

module.exports = {
  onPageLoad,
  changeColor,
  resetColors
}
