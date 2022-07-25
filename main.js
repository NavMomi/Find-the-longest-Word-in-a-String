//Return the length of the longest word in the provided sentence.

function longestString(str){
    let words=str.split(" ");
    let maxLength=0;
    for(let i=0;i<words.length;i++){
        if(words[i].length>maxLength){
            maxLength=words[i].length;
        }       
    
    }
console.log(maxLength);
}
let z=("The quick brown fox jumped over the lazy dog");
//z=("May the force be with you");
longestString(z);
