const fizzbuzz = function (values, max) {
  console.log('fizzbuzz')
  for (let i = 1; i <= max; i++) {
    let output = ''
    values.forEach((item, index) => { if (!(i % values[index].number)) { output += values[index].word } })
    output ? console.log(output) : console.log(i)
    output ? $('#fizzbuzz-output').append(output) : $('#fizzbuzz-output').append(i)
  }
}

module.exports = fizzbuzz
