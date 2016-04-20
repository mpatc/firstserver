'use strict'

module.exports = (function(first, second, resp){
      var solve = parseInt(first) + parseInt(second)
      console.log("solved:  " + solved)
      var solved = solve.toString()
      resp.write(solved)
      resp.end();

})
