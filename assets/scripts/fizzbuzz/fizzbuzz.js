const fizzbuzz = function (nums, strings, max) {
  for (let i = 0; i < max; i++) {
    let output = ''
    nums.forEach((item, index) => { if (!(i % nums[index])) { output += strings[index] } })
    output ? console.log(output) : console.log(i)
  }
}

fizzbuzz([3, 5, 4], ['fizz', 'buzz', 'fuzz'], 100)

module.exports = {
  fizzbuzz
}
