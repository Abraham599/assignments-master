/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
if(str1.length!=str2.length){
  return false;
}
const m1 = new Map();
const m2 = new Map();
for(let i=0;i<str1.length;i++){
  m1.set(str1[i],(m1.get(str1[i])||0)+1 );
}
for(let i=0;i<str2.length;i++){
  m2.set(str2[i],(m2.get(str2[i])||0)+1 );
}

for(let i=0;i<str1.length;i++){
  if(m1.get(str1[i])!==m2.get(str1[i])){
    return false;
  }
}
return true;
}

module.exports = isAnagram;
