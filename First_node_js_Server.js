//require function is used to include a module in node js code

var http=require("http");

//http is one of the built in module provided by node js used to create a http server

//createServer is one of the function of http module which basically creates the server
var server=http.createServer(function(request,response)
{
    //response is used to send response to the client
response.writeHead(200,{"Content-Type":"text/html"});
response.write("<html><body><h1 >Hello ! Welcome to NODE JS</h1></body></html>");
response.end();
});
server.listen(3011);//used to give the port number
console.log("First node js server");