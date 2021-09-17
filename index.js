var http = require('http'),
    httpProxy = require('http-proxy');

    var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:host+':'+port}).listen(8180); // See (†)
 
//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(port);
