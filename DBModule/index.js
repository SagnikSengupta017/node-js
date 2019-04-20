//exports ->instructions that tell node js which bits of code will be exported from this module to another module
//here authenticateUser function of DBModule will be used in First_node_js_server.js file

//In DBModule ,in index.js javascript file there is a function authenticateUser which will 
//be used in different js files so used exports 

exports.authenticateUser=function(username,password)
{
    if(username=="admin" && password=="admin")
        return "Valid User";
    else
        return "Invalid User";
}
;