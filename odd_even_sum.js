var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var i=0;
var sum_odd=0;
var sum_even=0;
while(i<elements.length){
    if(elements[i]%2==0){
        sum_odd=sum_odd+i

    }
    else{
        sum_even=sum_even+i
    }
    i++
}
console.log(sum_odd);
console.log(sum_even)