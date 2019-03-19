console.log('fizzbuzz')

let fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    let output = i
    if (i % 3 === 0) { output = 'fizz' }
    if (i % 5 === 0) { output = 'buzz' }
    if (i % 5 === 0 && i % 3 === 0) { output = 'fizzbuzz' }
    console.log(output)
  }
}

fizzbuzz()
// fizzbuzz() console logs 1 to 100 as the number, fizz, buzz, or fizzbuzz
// all values are static
// output is a variable that is overwritten in if statements if the expression is true
// when i = 15:
//      output = 15             line 3 sets output to 15
//      output = 'fizz'         line 4 overwrites previous output 15 to 'fizz'
//      output = 'buzz'         line 5 overwrites previous output 'fizz' to 'buzz'
//      output = 'fizzbuzz'     line 6 overwrites previous output 'buzz' to 'fizzbuzz'

// /////////////////////////////////////////////////////////////////////////////////////////

console.log('fizzbuzz with loop skipping using keyword: continue')

fizzbuzz = () => {
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
// when the if expression is true, console log the corresponding string and do keyword continue
// keyword continue skips all the code below and goes to the next iteration in the loop
// when i = 15
// executes line 25; console logs 'fizzbuzz' and does continue
// goes to i = 16

// /////////////////////////////////////////////////////////////////////////////////////////

console.log('fizzbuzz with appending strings')

fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    let output = ''
    if (i % 3 === 0) { output += 'fizz' }
    if (i % 5 === 0) { output += 'buzz' }

    if (output) { console.log(i) } else { console.log(output) }
  }
}

fizzbuzz()
// fizzbuzz() console logs 1 to 100 as the number, fizz, buzz, or fizzbuzz
// all values are static
// output is a variable that is concatinated with strings
// when i = 15:
//      output = ''              line 45 sets output to ''
//      output += 'fizz'         line 46 appends 'fizz' to the previous output string '' to create 'fizz'
//      output += 'buzz'         line 47 appends output 'fizz' with string 'buzz' to create 'fizzbuzz'

// /////////////////////////////////////////////////////////////////////////////////////////

console.log('fizzbuzz with a dynamic array of numbers and a dynamic array of strings')

fizzbuzz = function (nums, strings, max) {
  for (let i = 0; i <= max; i++) {
    let output = ''
    for (let index = 1; index <= nums.length; index++) {
      if (!(i % nums[index])) { output += strings[index] }
    }
    output ? console.log(output) : console.log(i)
  }
}

fizzbuzz([3, 5, 4], ['fizz', 'buzz', 'fuzz'], 100)
// fizzbuzz(nums, strings, max) console logs 1 to max as the number, fizz, buzz, or fizzbuzz
// nums is an array of numbers and strings is an array of strings which contain corresponding values
// maxValue is a number
// ternary syntax <expression> ? <action> : <action>
// is functionally the same as if else statement
// when i = 60:
//      output = ''           line 66 sets output to ''
//
// /////////////////////////////////////////////////////////////////////////////////////////

console.log('fizzbuzz with a dynamic array of numbers and a dynamic array of strings and array methods')

fizzbuzz = function (nums, strings, max) {
  for (let i = 1; i <= max; i++) {
    let output = ''
    nums.forEach((item, index) => { if (!(i % nums[index])) { output += strings[index] } })
    output ? console.log(output) : console.log(i)
  }
}

fizzbuzz([3, 5, 4], ['fizz', 'buzz', 'fuzz'], 100)
// fizzbuzz(nums, strings, max) console logs from 1 to maxValue the index or the concatinated string if divisible
// .forEach is an array method that is used on an array
// for each item in the array that is invoked upon (which is nums in this case)
// do an action
// nums is an array of numbers and strings is an array of strings
// arrays contain corresponding values

// /////////////////////////////////////////////////////////////////////////////////////////

console.log('fizzbuzz with a dynamic array of objects')

fizzbuzz = function (values, max) {
  for (let i = 1; i <= max; i++) {
    let output = ''
    values.forEach((item, index) => { if (!(i % values[index].number)) { output += values[index].word } })
    output ? console.log(output) : console.log(i)
  }
}

fizzbuzz([{number: 3, word: 'fizz'}, {number: 5, word: 'buzz'}, {number: 6, word: 'muzz'}, {number: 4, word: 'rizz'}], 360)
// fizzbuzz(values, max) console logs from 1 to max value
// values is an array of objects
// each object contains the keys number and word
