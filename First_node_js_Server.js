//require function is used to include a module in node js code

var http=require("http");

//http is one of the built in module provided by node js used to create a http server

//createServer is one of the function of http module which basically creates the server

var module=require("./DBModule");
//here as we are including DBModule , it will return an exports object which is being held by the reference variable module
var result1=module.authenticateUser("admin","admin2");
var uc=require("upper-case");
var a="Hello WOrld";
//here DBModule module is added to this js file
//in this js file we are including the DBModule module,at runtime it will check for index.js file
var server=http.createServer(function(request,response)
{
    //response is used to send response to the client
	//here authenticateUser function is invoked
    var result=module.authenticateUser("admin","admin");
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<html><body><h1 >Hello ! Welcome to NODE JS</h1><br><br><h3>"+result+"</h3></body></html>");
    response.end("<html><body><h1>uc(a)</h1></body></html>");
});
server.listen(3100);//used to give the port number
console.log("node js server");
console.log(uc(result1));
