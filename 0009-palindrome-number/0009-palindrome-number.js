/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString();
    let len = num.length;
    for(let i=0; i<len; i++){
        if(num[i]!==num[len-1-i])
        return false
    }
      return true
};