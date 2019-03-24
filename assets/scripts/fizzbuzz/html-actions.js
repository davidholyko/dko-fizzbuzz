const displayErrorMessage = input => {
  $('form').trigger('reset')
  $('#user-feedback').text(`${input} is already being used!`)
  $('#user-feedback').addClass('bg-danger text-light')
  setTimeout(() => {
    $('#user-feedback').text('')
    $('#user-feedback').removeClass('bg-danger text-light')
  }, 5000)
}

const displayEmpty = () => {
  $('form').trigger('reset')
  $('#user-feedback').text('No fizzbuzz rules were selected. Please click on a number above')
  $('#user-feedback').addClass('bg-danger text-light')
  setTimeout(() => {
    $('#user-feedback').text('')
    $('#user-feedback').removeClass('bg-danger text-light')
  }, 5000)
}
module.exports = {
  displayErrorMessage,
  displayEmpty
}
