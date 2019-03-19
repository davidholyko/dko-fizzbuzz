let fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) { console.log('fizzbuzz'); continue }
    if (i % 3 === 0) { console.log('fizz'); continue }
    if (i % 5 === 0) { console.log('buzz'); continue }
    console.log(i)
  }
}

fizzbuzz()
// fizzbuzz() console logs 1 to 100 as the number, fizz, buzz, or fizzbuzz
// all values are static

fizzbuzz = function (nums, strings, max) {
  for (let i = 0; i <= max; i++) {
    let output = ''
    for (let index = 1; i <= nums.length; i++) {
      if (!(i % nums[index])) { output += strings[index] }
    }
    output ? console.log(output) : console.log(i)
  }
}

fizzbuzz([3, 5, 4], ['fizz', 'buzz', 'fuzz'], 100)
// fizzbuzz(nums, strings, max) console logs 1 to max as the number, fizz, buzz, or fizzbuzz
//

fizzbuzz = function (nums, strings, max) {
  for (let i = 1; i <= max; i++) {
    let output = ''
    nums.forEach((item, index) => { if (!(i % nums[index])) { output += strings[index] } })
    output ? console.log(output) : console.log(i)
  }
}

fizzbuzz([3, 5, 4], ['fizz', 'buzz', 'fuzz'], 100)
// fizzbuzz(nums, strings, max) console logs from 1 to maxValue the index or the concatinated string if divisible
// nums is an array of numbers and strings is an array of strings
// arrays contain corresponding values

fizzbuzz = function (values, max) {
  for (let i = 1; i <= max; i++) {
    let output = ''
    values.forEach((item, index) => { if (!(i % values[index].number)) { output += values[index].word } })
    output ? console.log(output) : console.log(i)
  }
}

fizzbuzz([{number: 3, word: 'fizz'}, {number: 5, word: 'buzz'}, {number: 8, word: 'muzz'}, {number: 10, word: 'rizz'}], 100)
// fizzbuzz(values, max) console logs from 1 to max value
// values is an array of objects
// each object contains the keys number and word
