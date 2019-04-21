var http=require("http");


var module=require("./book");

var result1=module.authenticateUser("admin","admin2");

var server=http.createServer(function(request,response)
{
    
     result=module.authenticateUser("admin","admin");
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<html><body><h3>"+result+"</h3></body></html>");
    response.end();
});
server.listen(3001);
console.log("node js server");
console.log(result1);
