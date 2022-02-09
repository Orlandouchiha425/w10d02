const palindrome = (string) => {
    let i = 0, j = string.length - 1;
    while(i <= j){
        if(string[i] !== string[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

module.exports = palindrome;