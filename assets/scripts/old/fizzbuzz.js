console.log('\nfizzbuzz the most straight forward way\n')

let fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else console.log(i)
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

console.log('\nfizzbuzz with replacement\n')

fizzbuzz = () => {
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

console.log('\nfizzbuzz with loop skipping using keyword continue\n')

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
//      line 30: console logs 'fizzbuzz' and does continue which skips to i++
// i = 16

// /////////////////////////////////////////////////////////////////////////////////////////

console.log('\nfizzbuzz with appending strings\n')

fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    let output = ''
    if (i % 3 === 0) { output += 'fizz' }
    if (i % 5 === 0) { output += 'buzz' }
    if (output) { console.log(output) } else { console.log(i) }
  }
}

fizzbuzz()

// fizzbuzz() console logs 1 to 100 as the number, fizz, buzz, or fizzbuzz
// all values are static
// output is a variable that is concatinated with strings
// when i = 15:
//      output = ''              line 45 sets output to empty string ''
//      output += 'fizz'         line 46 appends 'fizz' to the previous output string '' to create 'fizz'
//      output += 'buzz'         line 47 appends output 'fizz' with string 'buzz' to create 'fizzbuzz'
// if statement:
//    if output is true (is a string with length of at least 1)
//    console log the string output
//    if output is not true (is a an empty sting)
//    console log the i (which is a number)

// /////////////////////////////////////////////////////////////////////////////////////////

console.log('\nfizzbuzz with appending dynamic strings\n')

fizzbuzz = (stringOne, stringTwo) => {
  for (let i = 1; i <= 100; i++) {
    let output = ''
    if (i % 3 === 0) { output += stringOne }
    if (i % 5 === 0) { output += stringTwo }

    if (output) { console.log(output) } else { console.log(i) }
  }
}

fizzbuzz('fezz', 'bizz')

// fizzbuzz() console logs 1 to 100 as the number, fizz, buzz, or fizzbuzz
// all values are static
// output is a variable that is concatinated with strings
// when i = 15:
//      output = ''              line 45 sets output to ''
//      output += 'fezz'         line 46 appends string 'fezz' to the previous output string '' to create 'fezz'
//      output += 'bizz'         line 47 appends string 'bizz' with output string 'fezz' to create 'fezzbizz'
// if statement:
//    if output is true (is a string with length of at least 1)
//    console log the string output
//    if output is not true (is a an empty sting)
//    console log the i (which is a number)

// /////////////////////////////////////////////////////////////////////////////////////////

console.log('\nfizzbuzz with dynamic values and appending dynamic strings \n')

fizzbuzz = (numberOne, numberTwo, stringOne, stringTwo) => {
  for (let i = 1; i <= 100; i++) {
    let output = ''
    if (!(i % numberOne)) { output += stringOne }
    if (i % numberTwo === 0) { output += stringTwo }

    if (output) { console.log(output) } else { console.log(i) }
  }
}

fizzbuzz(6, 7, 'fezz', 'bizz')

// fizzbuzz() console logs 1 to 100 as the number, fizz, buzz, or fizzbuzz
// all values are static
// output is a variable that is concatinated with strings
// when i = 42:
//      output = ''              line 45 sets output to ''
//      output += 'fizz'         line 46 appends 'fizz' to the previous output string '' to create 'fizz'
//      output += 'buzz'         line 47 appends output 'fizz' with string 'buzz' to create 'fizzbuzz'

// /////////////////////////////////////////////////////////////////////////////////////////

console.log('\nfizzbuzz with a dynamic array of numbers and a dynamic array of strings\n')

fizzbuzz = function (nums, strings, max) {
  for (let i = 0; i <= max; i++) {
    let output = ''
    for (let index = 0; index < nums.length; index++) {
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
//      output = ''               line 66 sets output to ''
//      output = 'fizz'           line 99 appends strings[index] to output string ''
//                                    strings is an array and index is 0
//                                    value of strings[0] is the 0th item in strings which is 'fizz'
//      output = 'fizzbuzz'       line 99
//                                    strings is an array and index is 1
//                                    value of strings[1] is the 0th item in strings which is 'buzz'
//      output = 'fizzbuzzfuzz'   line 99
//                                    strings is an array and index is 1
//                                    value of strings[1] is the 0th item in strings which is 'buzz'
// /////////////////////////////////////////////////////////////////////////////////////////

console.log('\nfizzbuzz with a dynamic array of numbers and a dynamic array of strings and array methods\n')

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

console.log('\nfizzbuzz with a dynamic array of objects\n')

fizzbuzz = function (values, max) {
  for (let i = 1; i <= max; i++) {
    let output = ''
    values.forEach((item, index) => { if (!(i % values[index].number)) { output += values[index].word } })
    output ? console.log(output) : console.log(i)
  }
}

fizzbuzz([{number: 3, word: 'fizz'}, {number: 5, word: 'buzz'}, {number: 6, word: 'muzz'}, {number: 4, word: 'rizz'}], 60)

// fizzbuzz(values, max) console logs from 1 to max value
// values is an array of objects
// each object contains the keys number and word
