const $ = require('jquery')


$(document).ready(function(){

  $("button").on("click", function(event) {
    var inputtedText = $('textarea').val()
    var textToArray  = inputtedText.split(" ")

    debugger 

  })

})

// As a user
// when I visit Word Watch
// and paste a paragraph into the "Paste text here" textarea
// and I click "Break down"
// Then I should see text appear on the right side of the page
// With each word from the paragraph only shown once
// and the size of each word is relative to its frequency in the paragraph.
