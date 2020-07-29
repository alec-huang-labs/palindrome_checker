function palindrome(str) {
    let formatted = str.replace(/\W|_/g, '')
                       .toLowerCase()
                       .split('');
    console.log(formatted);
    let checker = formatted.every((val,index) => val === formatted[formatted.length - index - 1]);
    return checker;
}
//^my solution! niceeee. proud

function palindrome(str) {
    return (
      str.replace(/[\W_]/g, "").toLowerCase() ===
      str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
}
//^FCC solution even cleaner .spli('') turns it into an array, reverse() reverses the array, .join('') turns it back into a string
//then checks if the two strings are equal

console.log(palindrome("0_0 (: /-\ :) 0-0"), palindrome("_eye"));
//both shoudl return false


let panama = "A man, a plan, a canal. Panama";
let noSpace = panama.replace(/\W/g, '').toLowerCase();
let panamaArr = noSpace.split('');
//['a', 'm', 'a', 'n', 'a', 'p', 'l', 'a', 'n', 'a', 'c', 'a', 'n', 'a', 'l', 'p', 'a', 'n', 'a', 'm', 'a' ]

//lowercase array 
let racecar = "race car";
const noCarSpace = racecar.replace(/\W/g, '').toLowerCase().split('');
console.log(`noCarSpace: ${noCarSpace}`);
const racecarReverse = noCarSpace.reverse();
console.log(`racecarReverse: ${racecarReverse}`);

function equals(original, opposite){
        console.log(`original = ${original}`);
        console.log(`opposite = ${opposite}`);
    return original.every(function(current, index){
        console.log(`Original = index: ${index} val: ${current}`);
        console.log(`Opposite = index ${index} val: ${opposite[index]}`);
        return current === opposite[index];
    });
}

//console.log(equals(noCarSpace, panamaArr));


let equality = noCarSpace.every((val,index) => val === noCarSpace[noCarSpace.length - index - 1]);
console.log(equality);
