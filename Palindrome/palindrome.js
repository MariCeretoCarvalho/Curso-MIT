
// refines the string to remove any chars that are not alphabets or numbers
// it'll convert "a man, a plan, a canal, panama" to "amanaplanacanalpanama"
const refine = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        // if character lies between 'a' to 'z' or '0' to '9'  
        if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'))
            result += ch;
    }
    return result;
};
 
const palindromeChecker = (str) => {
    str = str.toLowerCase(); // convert to lower case
    str = refine(str); // refine the string to remove any non-alphanumeric characters 
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] != str[right]) return false;
        left++;
        right--;
    }
    return true;
}