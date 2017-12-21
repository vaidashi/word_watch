const $ = require('jquery')
import {postWords} from "../ajax-requests/word-requests"
import {appendParsedText} from "../response-handlers/word-responses"


$(document).ready(function(){

  $("button").on("click", function(event) {
    var inputtedText = $('textarea').val().toLowerCase()
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


function sendWords(words) {
  $.each(words, function (i, word) {
    postWords(word)
  })
}
