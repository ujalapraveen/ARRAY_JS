
var readlineSync=require("readline-sync")
var user=readlineSync.question("enter a user =")
var separate=user.split(" ")
// console.log(separate)
var a=(separate[0].charAt(0)+ "." +separate[1]. charAt(0).toUpperCase());
console.log(a,"anisha")

