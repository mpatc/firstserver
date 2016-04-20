$(document).ready(function() {

    // $('body').append($overlay, $modal);
    $("div").on("mouseover", ".card", function() {
        // console.log( $( this ).text() );
        $(this).removeClass('animated jello bounceInLeft over')
        $(this).addClass('animated jello over')
    });
    $("div").on("animationend", ".card", function(e) {
        $(this).removeClass('jello bounceInLeft over')
    })
    $('#emailButton').on('click', checker)
    $('#enterMath').on('click', mather)
    $('#emailButton').on('click', checker)
    $(".funct").on("click", mathSet)
    $("#enterString").on('click', stringer)
    $(".stringer").on("click", stringSet)
    $("#enterAge").on("click", age)

});

function checker() {
    var email = $('#inEmail').val();
    var Semail = decodeURIComponent(email)
    $.get(`/email/${email}`, function(data) {
        var person = $('<span>').addClass('card');
        var name = $('<h1>').addClass('email').text(email).appendTo(person)
        var $gravvy = $("<img>").attr(`src`, `http://www.gravatar.com/avatar/${data}`).appendTo(person);
        $('#picbox').append(person)
    })
}

function mather() {
    var first = $('#math1').val()
    var second = $('#math2').val()
    var mType = $("#funct1").text().trim();
    switch (mType) {

        case "sum":
            var answer = parseInt(second) + parseInt(first)
            alert(first + " plus " + second + " equals " + answer)
            break;
        case "diff":
            var answer = parseInt(first) - parseInt(second)
            alert(first + " plus " + second + " equals " + answer)
            break;
        case "multi":
            var answer = parseInt(second) * parseInt(first)
            alert(first + " plus " + second + " equals " + answer)
            break;
        case "divide":
            var answer = parseInt(second) / parseInt(first)
            alert(first + " divide " + second + " equals " + answer)
            break;
        case "pow":
            var base = parseInt(first)
            var exp = parseInt(second)
            var answer = Math.pow(base, exp)
            alert(first + " to the " + second + " equals " + answer)
            break;
        default:

            resp.statusCode = 404;
            resp.write(`.......


  <h1> u done fucked up sun</h1>




  ............`)
            resp.end("try again\n");
            break;
    }
}

function stringer() {
    var first = $('#Komments').val()
    var mType = $("#mButton").text();
    switch (mType) {

        case "wordCount":
            var words = first.split(" ")
            var answer = words.length
            alert("there are " + answer + " words in the text")
            break;
        case "charCount":
            var words = first.split("")
            var answer = words.length
            alert("there are " + answer + " characters in the text")
            break;

        case "Avgword":
            var letters = first.split("")
            var words = first.split(" ")
            var div = words.length
            var chars = letters.length - div
            var answer = chars / div
            alert("the average word lenght of the " + div + " words is " + answer)
            break;
        case "divide":
            var answer = parseInt(second) / parseInt(first)
            alert(first + " divide " + second + " equals " + answer)
            break;
        case "pow":
            var base = parseInt(first)
            var exp = parseInt(second)
            var answer = Math.pow(base, exp)
            alert(first + " to the " + second + " equals " + answer)
            break;
        default:

            resp.statusCode = 404;
            resp.write(`.......


  <h1> u done fucked up sun</h1>




  ............`)
            resp.end("try again\n");
            break;
    }
}

function stringSet() {
    var func = this.innerHTML
    $('#mButton').text(func)
}


function mathSet() {
    var op = this.innerHTML
    console.log("this:    " + this.innerHTML)
    $('#funct1').text(op)
}

function age(x,y,z) {
  var x = $("#year").val();
  var y = $("#month").val();
  var z = $("#day").val();
  var nowDate = Math.floor(Date.now() / 86400000) ;
  var givDateInt = new Date(x,y,z);
  var givDate = Math.floor(givDateInt.getTime() / 86400000);
  var difference = (Math.abs(nowDate-givDate))
  var month = Math.round(Math.floor(difference/30.436875));
  var day = Math.round(difference - (month * 30.436875));
  var year = Math.floor(difference/365.2425)
  var month2 = month - (year*12)
  var display = {
    yearDis: year + " years ",
    monthDis: month2 + " months ",
    dayDis: day + " days",
  };

  if (year === 1) {
    display.yearDis = "1 year "
  }
  if (month === 1 || month2 === 1) {
     display.monthDis = "1 month ";
      }
  if (day === 1) {
    display.dayDis = "1 day"
  };
  if (year === 0) {
    display.yearDis = ""
    }
  if (day === 0){
    display.dayDis = "";
  };
  if (month === 0 || month2 === 0) {
    display.monthDis = "";
  };
 	if(day === 0 && year === 0 && month === 0) {
  	display.dayDis = "Today is today. Such meta... whoa!"
  }

window.alert(display.yearDis + display.monthDis + display.dayDis );
};
