/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target){
    nums.push(target)
    nums.sort(function(a,b){return (a-b)})
    for(let i=0; i<nums.length; i++){
        if(nums[i]==target)
            return i
    }
    
     
    
};