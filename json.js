require('date-utils');

var obj = {   
    "ServiceOperation": 170002,  
    "DOID": "",   
    "DOIDs": ["1111","2222"],
    "Token":"",
    "RequestGuid":"11111111111122222222223333333333",
    "IsRequiredTransaction":false,
    "DateRequested":Date.today(),
	"IsLoginOperation":false
};  
  
var str = JSON.stringify(obj);  
console.log(str);  
  
var obj2 = JSON.parse(str);  
console.log(obj2);  