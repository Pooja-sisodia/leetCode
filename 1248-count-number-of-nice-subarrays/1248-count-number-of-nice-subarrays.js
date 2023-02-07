/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k){
    
     let left = 0;
    let right = 0;
    let prefix = 0;
    let result = 0
    let oddNo = 0;
    
    for(let right=0; right<nums.length; right++){
        
        //check-oddNo.
        if(nums[right]%2 != 0){
            oddNo++
        }
        
        //checking OddNO occur in left side Condition
        while(oddNo>k && left<right){
            if(nums[left]%2 !=0){
                oddNo--;
                left++;
                prefix = 0;     
            }  
        }
        
        //CHECKING if the no is an even
        
        while(nums[left]%2==0 && left<right){
            prefix++;
            left++;
        }
        
        //Condition getting true
        
        if(oddNo == k){
            result += prefix+1
        } 
    }
    
    return result;
    
};