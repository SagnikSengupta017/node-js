
//here authenticateUser function of DBModule will be used in First_node_js_server.js file


//here we are adding each and every reusable methods to the exports object
exports.authenticateUser=function(username,password)
{
    if(username=="admin" && password=="admin")
        return "Valid User";
    else
        return "Invalid User";
}
;