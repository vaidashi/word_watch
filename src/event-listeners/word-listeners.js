const $ = require('jquery')


$(document).ready(function(){

  $("button").on("click", function(event) {
    var inputtedText = $('textarea').val()
    // var textToArray  = inputtedText.split(" ")

    var parseWords = parseText(inputtedText)
    appendParsedText(parseWords)

  })

})

// As a user
// when I visit Word Watch
// and paste a paragraph into the "Paste text here" textarea
// and I click "Break down"
// Then I should see text appear on the right side of the page
// With each word from the paragraph only shown once
// and the size of each word is relative to its frequency in the paragraph.


function parseText(incomingText) {
  var wordCount = {}
  var splitWords = incomingText.split(" ")

  $.each(splitWords, function(i, word) {
    if (wordCount[word]) {
      wordCount[word] += 1
    } else {
      wordCount[word] = 1
    }
  })
  return wordCount
}

function appendParsedText(parsedWords) {
  $.each(parsedWords, function( key, value ) {
    $('.word-count').append('<p><font size="' + value + 'em">' + key + '</font></p>')
  });
}
