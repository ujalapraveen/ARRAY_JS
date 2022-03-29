var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var i=0;
var count_of_crorepati=0;
var count_of_lakhpati=0;
var count_of_dilwale=0;
for(var i of kitnapaisahai){
    if(i>=10000000){
        count_of_crorepati+=1

    }
    else if(i>=100000){
        count_of_lakhpati+=1

    }
    else{
        count_of_dilwale+=1

    }

}
console.log(count_of_crorepati)
console.log(count_of_lakhpati)
console.log(count_of_dilwale);
