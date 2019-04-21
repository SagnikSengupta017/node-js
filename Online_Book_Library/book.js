exports.authenticateUser=function(userName,password)
{
	if(userName=="admin" && password=="admin")
		return "YES !!! Valid User"
	else
		return "Invalid User"
		
}