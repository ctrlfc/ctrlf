/**
 * Created by Ctrlf on 16/10/10.
 */

var koa = require('koa');
var app = koa();
var router = require('koa-router');

app.use(router(app));
// app.use(function *() {
//     var path = this.path;
// });
//
// app.use(function *(){
//     this.body = '<p>我是一个html片段</p>';
// })

// app.use(function *() {
//     this.demo = '<p>我是一个html片段</p>';
// });
//
// app.use(function *() {
//     this.body = this.demo;
// });
app.get('/', function *(next) {
    //首页
    //this 指向
});

app.get('/detail/:id', function *(next) {
    //我是详情页面
    //:id 是路由通配规则,请求/detail/123 就会进入该generator function逻辑
    var id = this.params.id;//123
});

app.param('id', function *(ID, next) {
    this.id = Number(id);
    if (typeof this.id != 'number') return this.status = 404;
    yield next;
}).get('/detail/:id', function *(next) {
    //我是详情页面
    var id = this.id;
    this.body = id;
})

app.use(function *() {
    this.demo = '<p>我是一个html片段</p>';
    this.body = this.demo;
});

app.listen(3000);
//koa的listen()除了指定了http服务以外,还会启动httpserver
/*如:var http = require('http');
 http.createServer(app.callback()).listen(3000);
 可用与开启"https"服务
 */
console.log('连接成功!')