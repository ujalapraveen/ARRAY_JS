var readlineSync=require("readline-sync")
var num=readlineSync.questionInt("enter a num")
var i=0;
while(i<=num){
    j=1
    while(j<=10){
        console.log(i,"*",j,"=",i*j)
        j++

    }
    i++
    console.log()

}