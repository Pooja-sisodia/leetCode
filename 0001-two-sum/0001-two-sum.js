/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let len = nums.length
    for(let i=0; i<len; i++){
        for(let j=1; j<len; j++){
            if(nums[i]+nums[j]==target){
                if(i!=j){
                    return[i,j]
                }
            }
        
                
        }
    
    }
    
};