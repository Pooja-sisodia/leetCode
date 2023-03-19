/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let currval = nums[0];
    for(let i=1; i<nums.length; i++){
        currval= Math.min(currval , nums[i])

    }
     return currval;
    
};