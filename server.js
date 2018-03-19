'use strict';
var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(request, response) {
	// 解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;
	console.log('Request for + ' + pathname + ' received.');
	fs.readFile(__dirname + pathname, function(err, data) {
		if (err) {
			console.log(err);
			response.writeHead(404, {
				'Content-Type': 'text/plain'
			});
			response.write('404 访问的文件不存在！');
		} else {
			console.log(data);
			response.write(data);
		}
		response.end();
	});
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888');