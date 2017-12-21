const $ = require('jquery')
const API = "https://wordwatch-api.herokuapp.com"


function getTopWord() {
  return $.ajax({
          url: API + "/api/v1/top_word",
          method: "GET"
        })
}


export {getTopWord}
