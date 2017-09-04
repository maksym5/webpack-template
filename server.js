var static = require('node-static');
var fileServer = new static.Server('./dist');
var port = 3000;

require('http').createServer(function (request, response) {
	request.addListener('end', function () {
		fileServer.serve(request, response);
	}).resume();
}).listen(port, function(){
  console.log('listening on localhost:' + port);
});
