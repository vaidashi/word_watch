const $ = require('jquery')
const API = "https://wordwatch-api.herokuapp.com"


function getTopWord() {
  return $.ajax({
          url: API + "/api/v1/top_word",
          method: "GET"
        })
}

function postWords(word) {
  $.ajax({
    url: API + "/api/v1/words",
    method: "POST",
    data: { word: { value: word } },
    success: function(response) {
      if (response == 'success') {console.log(`${word} added`)} else {console.log("not success")}
    }
  })
}

export {getTopWord, postWords}
