function palindrome(str) {
    let formatted = str.replace(/\W|_/g, '')
                       .toLowerCase()
                       .split('');
    let checker = formatted.every((val,index) => val === formatted[formatted.length - index - 1]);
    console.log(checker);
    return checker;
}
//Example Function Calls:
palindrome("race car");
palindrome("not a palindrome"); 
palindrome("A man, a plan, a canal. Panama");
//Your Function Calls:
