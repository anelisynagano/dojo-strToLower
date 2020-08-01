// Write a function that receives a string of characters.
// The function will have to return this same string but in lowercase.

// Ex: strToLower("HELLo WORLD") ==> "hello world"

// If a character is already lowercase, or if it is a special character, ignore it.

const strToLower = (text) => {
    let arr = text.split('');
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charCodeAt()
        arr[i] >= 65 && arr[i] <= 90 ? arr[i] += 32 : arr[i]
        arr[i] = String.fromCharCode(arr[i]);
    }
    return arr.join('');
}

console.log(strToLower('aAbBCc'));
console.log(strToLower('a+A'));
console.log(strToLower('DoeS-iT+w0rK?'));
