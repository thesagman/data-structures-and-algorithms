// Linear Search 

let array = [10, 20, 30, 40, 50];
let targetElement = 30;


var LinearSearch = function (array, target) {
    for (let i = 0; i < array.length; i++) {
        if (target == array[i]){
            return true;
        }
   }
   return false;
}

console.log(LinearSearch(array,targetElement));