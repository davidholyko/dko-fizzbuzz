const fizzbuzz = function (values, max) {
  console.log('fizzbuzz')
  for (let i = 1; i <= max; i++) {
    let output = ''
    values.forEach((item, index) => { if (!(i % values[index].number)) { output += values[index].word } })
    setTimeout(() => {
      output ? $('#fizzbuzz-output').append(`<h1>${i}: ${output}</h1>`) : $('#fizzbuzz-output').append(`<h1>${i}: ${i}</h1>`)
    }, 1000)
  }
}

module.exports = fizzbuzz
