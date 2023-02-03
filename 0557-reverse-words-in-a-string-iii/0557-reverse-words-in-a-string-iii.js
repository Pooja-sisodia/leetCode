/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    // return s.split(" ").map(function(word) {
    //     return word.split("").reverse().join("");
    // }).join(" ");
     
     let str = s.split(" ")
     let arr = [];
     for(let i=0; i<str.length; i++){
         let Estr = str[i].split("")
         let l = 0; 
         let h =  Estr.length-1;
         while(l<h){
             Estr[l] = Estr[l].concat(Estr[h])
             Estr[h]= Estr[l].slice(0,-1)
             Estr[l] = Estr[l].slice(-1)
               l++;
               h--;
         }
          arr.push(Estr.join(""))
          
     }
      return arr.join(" ")
};