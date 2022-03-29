

var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];

var max=0;
var sec_max=0;
var i=0;
while(i<numbers.length){
    if(numbers[i]>max){
        sec_max=max;
        max=numbers[i]
    }
    else if(sec_max<numbers[i] && numbers[i]<max){

        sec_max=numbers[i]
    }
    i++
        
}
console.log(sec_max)

