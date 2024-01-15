//check for Anagram between two strings
function isAnagram(str1, str2){
    if(str1.lenth !== str2.length)
        return false;
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    if(str1 === str2)
        return true;
    return false;
}

const str1 = 'interval';
const str2 = 'etvnlair';

console.log(isAnagram(str1, str2))