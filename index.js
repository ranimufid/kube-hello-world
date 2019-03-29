// var http = require('http');
var os = require("os");
var hostname = os.hostname();
var uptime = os.uptime();
var platform = os.platform();

// Include the HTTP Node library
// http://nodejs.org/docs/latest/api/http.html
var http = require('http');

// define the IP and port number
var localIP = "0.0.0.0"; // 127.0.0.1 is used when running the server locally
var port = 8181; // port to run webserver on

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor(seconds % (3600 * 24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function sayHello(req, res) {

  console.log("We've got a request for " + req.url);

  // HTTP response header - the content will be HTML MIME type
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Write out the HTTP response body
  res.write('<html><body style="background-color:Chartreuse;">' +
    '<h1><center>Hello World from: ' + hostname + '</center></h1>' +
    '<P ALIGN=CENTER><b> uptime: ' + secondsToDhms(uptime) + '</b></P>' +
    '<P ALIGN=CENTER><b> platform: ' + platform + '</b></P>' +
    '</p></body></html>');

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