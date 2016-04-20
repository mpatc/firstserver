'use strict'

module.exports = (function(req, resp) {
    var params = req.url.split('/')
    console.log("params  " + params)
    params.shift()
    var task = params.shift();
    var num = randNum();
    console.log("task  ", task)
    console.log("params: ", params)
    var fun = params[0]
    switch (fun) {
        case "pow":
            var base = params[1]
            var exponent = params[2]
            require("./pow.js")(base, exponent);
            break;
        case "sum":
            var base = params[1]
            var exponent = params[2] + base
            alert(exponent)
            break;
        case "diff":
            var base = params[1]
            var exponent = params[2]
            require("./diff.js")(base, exponent);
            break;
        case "mult":
            var base = params[1]
            var exponent = params[2]
            require("./mutlt.js")(base, exponent);
            break;
        default:

            resp.statusCode = 404;
            resp.write(`.......


        <h1> u done fucked up sun</h1>




        ............`)
            resp.end("try again\n");
            break;
    }

})

// add stuff below
//
//

// case "random":
//     var rando = (Math.floor(Math.random() * 100)) + 1
//     var randod = rando.toString();
//     resp.write(`<h1 style='color: skyblue;'> The answer to  `)
//     resp.write(" your random.....<br> number needs....  " + randod + "</h1>")
//     resp.end();
//     break;
// case "pi":
//     var pi = Math.PI
//     var pied = pi.toString();
//     resp.write(`<h1 style='color: red;'> The answer to  `)
//     resp.write(" your pi.....<br> number needs....  " + pied + "</h1>")
//     resp.end();
//     break;
//     case "math":
//     require('./math')(req, resp);
//     break;
//     case "string":
//     require('./string')(req, resp);
//     break;
// case "sqrt":
//     var eq = quer[2]
//     var eqd = eq.toString()
//
//     var sqrt = Math.sqrt(eq)
//     var sqrtd = sqrt.toString()
//     resp.write(`<h1 style='color: navy;'> The answer to  `)
//     resp.write(" the square root of....<br> " + eqd + " is " + sqrtd + "</h1>")
//     resp.end();
//     break;
// case "sum":
//     quer.shift();
//     quer.shift()
//     console.log(quer)
//     var sum = quer.reduce(function(pv, cv) {
//         return pv + cv;
//     }, 0);
//     var summer = sum.toString();
//     resp.write(`<h1 style='color: green;'> The answer to  SUM is <br> `)
//     resp.write(summer + "</h1>")
//     resp.end();
//     break;
// default:
//     resp.write("What?")
//     resp.end();
//     break;
