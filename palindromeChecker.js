function palindrome(str) {
    let formatted = str.replace(/\W|_/g, '')
                       .toLowerCase()
                       .split('');
    let checker = formatted.every((val,index) => val === formatted[formatted.length - index - 1]);
    return checker;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"), palindrome("_eye"));
//both should return false



