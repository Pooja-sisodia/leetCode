/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let n = numbers.length;
    let low = 0;
    let high = n-1;
    let map = new Map();
    
     while(low<high){
         map.set(numbers[low],1)
         map.set(numbers[high],1)
         let sum =numbers[low]+numbers[high];
         if(sum==target)
             return[low+1,high+1]
             
         else if(sum>target)
             high--;
         else
             low++
         
            
         }
            
    
};