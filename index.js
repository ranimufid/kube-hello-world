// var http = require('http');
var os = require("os");
var hostname = os.hostname();

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World from: " + hostname);

// });

// var port = 80;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);
/************************************************
FILENAME
server_simple.js
DESCRIPTION
creates a simple web server that
display "Hello Dynamic World Wide Web"
HOW TO START SERVER:
1) from terminal run 'node simple_server.js'
2) open web browser visit http://127.0.0.1:8080
*************************************************/

// Include the HTTP Node library
// http://nodejs.org/docs/latest/api/http.html
var http = require('http');

// define the IP and port number
var localIP = "0.0.0.0"; // 127.0.0.1 is used when running the server locally
var port = 8181; // port to run webserver on

function sayHello(req, res) {

  console.log("We've got a request for " + req.url);

  // HTTP response header - the content will be HTML MIME type
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Write out the HTTP response body
  res.write('<html><body style="background-color:Chartreuse;">' +
    '<h1><center>Hello World from: ' + hostname + '</center></h1>' +
    '</body></html>');

  // End of HTTP response
  res.end();

}

/************************/
/*  START THE SERVER    */
/************************/

// Create the HTTP server
var server = http.createServer(sayHello);

// Turn server on - now listening for requests on localIP and port
server.listen(port, localIP);

// print message to terminal that server is running
console.log('Server running at http://' + localIP + ':' + port + '/');