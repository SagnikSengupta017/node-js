var http=require("http");
var module=require("./book");
var url=require("url");// fetching  the buit-in url module
var querystring=require("querystring") //fetching the querystring built-in module 

//for get request
var server=http.createServer(function(request,response)
{
    
    
    query=url.parse(request.url).query;
    //url.parse->parse the url, which means will divide the url into parts like protocol(http),path(localhost),port(3001),query string(data sent by the client like username and password)
    //request.url->get the url, data passed by client to server having all the data
    //url.parse(request.url).query->fetching the query string i.e data sent by client like username and password
    username=querystring.parse(query)["UserName"];
    //querystring.parse(query)->query variable stores the query string from the url
    //parse method of querystring module will act on it and fetch the username and password
    password=querystring.parse(query)["password"]; 
    
    result=module.authenticateUser(username,password);
    
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<html><body><h3>"+result+"</h3></body></html>");
    response.end();
});
server.listen(3001);
console.log("Server is running !!!");

