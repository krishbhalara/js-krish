const accountId = 14435;
let accountEmail = "krishbhalara@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;

// accountId = 2 - not allowed

// note :-
/* prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "krishbhalara321@gmail.com";
accountPassword = "123456";
accountCity = "rajkot";

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);

