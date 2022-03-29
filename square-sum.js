var squaresum=(array)=>{
    var i=0;
    var sum=0;
    while(i<array.length){
        c=array[i]*array[i]
        sum+=c
    i++
    }
    return sum

}



console.log(squaresum([1,2,2]))




 var a=[1,2,3,[5,7,8,3],4,1,2,1]
 var sum=0
 var i=0
 while(i<a.length){
     if(typeof(a[i])==Number){
        sum+=a[i]

     }
     else{
         j=0
         while(j<a[i].length){
             sum+=a[i][j]
             j+=1
         }
     }
     i+=1
 }
 console.log(sum)





