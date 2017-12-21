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

  // $('.top-word').append('<h4>' + word + '(count:' + count + ')</h4>')

  $('h3').append(`<h6>${word} - count: ${count}</h6>`)

}
