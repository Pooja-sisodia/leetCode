/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let n = numbers.length;
    let l = 0;
    let h = n-1;
    
    while(l<h){
         let sum =numbers[l]+numbers[h];
         if(sum==target)
             return[l+1,h+1]
         else if(sum>target)
             h--;
         else
             l++
         }
         return -1
};