const generateButtons = () => {
  console.log('generateButtons')
  const words = ['fizz', 'bizz', 'buzz', 'fuzz', 'fazz', 'bazz', 'fezz', 'bezz', 'fozz', 'bozz']
  for (let i = 3; i < 13; i++) {
    const element =
    `<button id="number-${i}" data-number=${i} data-word=${words[i - 3]} class="number">${i}</button>`
    $('#numbers').append(element)
  }
}

const changeColor = event => {
  $(event.target).addClass('number-picked')
}

const resetColors = () => { $('#numbers').children().removeClass('number-picked') }

const onPageLoad = () => {
  generateButtons()
}

module.exports = {
  onPageLoad,
  changeColor,
  resetColors
}
