const $ = require('jquery')
import {getTopWord} from "../ajax-requests/word-requests"


$(document).ready(function(){

  getTopWord()
    .then(function(data){
      listTopWord(data)
    }).fail(function() {
      handleError()
    })

})


function listTopWord(topWord) {
  var word = Object.keys(topWord["word"])
  var count = Object.values(topWord["word"])

  $('h3').append(`<h6>${word}  (count: ${count})</h6>`)
}

function appendParsedText(parsedWords) {
  $.each(parsedWords, function( key, value ) {
    $('.word-count').append('<p><font size="' + value + 'em">' + key + '</font></p>')
  });
}


export {appendParsedText}
