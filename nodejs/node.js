
/*
let fs = require("fs");
 
try {
    var fd = fs.readFileSync("user.txt","utf8");
    console.log(fd);
}catch (e) {
    console.log(e);
}



let data = "1";
let comp = "COMPLETE FILE WRITE!";
 
try{
    fs.writeFileSync("user.txt",data,"utf8");
    console.log(comp);
}catch(e){
    console.log(e);
}

*/

var http = require('http');	// 서버 만드는 모듈 불러오기
var fs = require('fs');

var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';	// 실행할 url
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(8080);		// 실행할 port
