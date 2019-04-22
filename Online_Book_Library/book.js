exports.authenticateUser=function(userName,password)
{
	if(userName=="admin" && password=="admin")
		return "Valid User"
	else
		return "Invalid User"
		
}