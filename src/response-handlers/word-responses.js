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
  console.log(topWord)
}
