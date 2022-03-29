// var a=["ujala","savita"]
// if(include (a)){
//     console.log("t is there")
// }

// var a=3!=="3"
// console.log(a)

// var a=null

// var a="ujala"+20+"10"
// console.log(a)


// var a=[1,2,3,4,]
// a.unshift("sandhya")
// console.log(a)



// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// var number =30;
// output=[]
// for(var i of n){
//    for(var j of n){
//        if (i+j === number){
//            output.push([i,j])
//        }
//   }
// }
// console.log(output);

var readlineSync=require("readline-sync")
var num=readlineSync.questionInt("enter your number")
c=[]
i=0
while(i<num.length){
    j=0
    d=[]
    while(j<num.length){
        if(num==0){
            d.push(num[i])
            console.log(d);

        }
        else{
            c.push(num[i])
            console.log(c)
            j++
        // i++
        }
        i++
     
    }
}


