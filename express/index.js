var express = require('express');
var path = require('path')
var app = express();
var proxy = require('http-proxy-middleware');
// 托管静态资源
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/api', proxy({
	target: 'http://localhost:3001',
	changeOrigin: true,
	pathRewrite: {
		'^/api': ''
	}
}));
app.listen(2000, function () {
	console.log('启动成功 2000');
});