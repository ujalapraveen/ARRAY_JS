const fruits = ["Banana", "Orange", "apple", "Mango","ujaa","savita"];
fruits.fill("Kiwi",2,4);
console.log(fruits)


const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result)



var array = [10, 20, 30, 40, 50];

    var found = array.find(function (element) {
        return element < 20;
    });
 
    console.log(found);

var a=["a","b","c","d","e"];
a.fill(0,1,3)
console.log(a);


