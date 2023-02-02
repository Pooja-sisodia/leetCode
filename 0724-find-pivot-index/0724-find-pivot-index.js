/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
     let total= 0;
    
    for(let i=0; i<nums.length; i++){
        total += nums[i]
             
    }
     let leftSum = 0
     let rightSum = 0
     for(let j=0; j<nums.length; j++){
         rightSum = total-nums[j]-leftSum
         if(rightSum == leftSum){
             return j
         }
         leftSum = leftSum+nums[j]
         
     } 
    return -1


    
};