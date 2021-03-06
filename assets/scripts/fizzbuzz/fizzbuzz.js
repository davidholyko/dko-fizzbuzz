const fizzbuzz = function (values, max) {
  console.log('fizzbuzz')
  for (let i = 1; i <= max; i++) {
    let output = ''
    values.sort((a, b) => a.number - b.number).forEach((item, index) => { if (!(i % values[index].number)) { output += values[index].word } })
    output ? $('#fizzbuzz-output').append(`<h1>${i}: ${output}</h1>`) : $('#fizzbuzz-output').append(`<h1>${i}: ${i}</h1>`)
  }
}

module.exports = fizzbuzz
