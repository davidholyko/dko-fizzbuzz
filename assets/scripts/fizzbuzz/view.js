const generateButtons = () => {
  console.log('generateButtons')
  for (let i = 3; i < 13; i++) {
    const element =
    `<button id="number-${i}" data-number=${i} class="number">${i}</button>`
    $('#numbers').append(element)
  }
}

const generateWords = () => {
  console.log('generateWords')
  const words = ['fizz', 'bizz', 'buzz', 'fuzz', 'fazz', 'bazz', 'fezz', 'bezz', 'fozz', 'bozz']
  for (let i = 0; i < 10; i++) {
    const element =
    `<button id="word-${i}" data-word=${words[i]} class="word">${words[i]}</button>`
    $('#words').append(element)
  }
}

const changeColor = event => {
  $(event.target).css({'background-color': 'red', 'cursor': 'auto'})
}

const onPageLoad = () => {
  generateButtons()
  generateWords()
}

module.exports = {
  onPageLoad,
  changeColor
}
