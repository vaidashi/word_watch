const $ = require('jquery')
import {postWords} from "../ajax-requests/word-requests"

$(document).ready(function(){

  $("button").on("click", function(event) {
    var inputtedText = $('textarea').val()
    var textToArray  = inputtedText.split(" ")

    var parseWords = parseText(inputtedText)
    appendParsedText(parseWords)
    sendWords(textToArray)
  })

})


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

function sendWords(words) {
  $.each(words, function (i, word) {
    debugger

    postWords(word)
  })
}
