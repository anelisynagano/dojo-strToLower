// Write a function that receives a string of characters.
// The function will have to return this same string but in lowercase.

// Ex: strToLower("HELLo WORLD") ==> "hello world"

// If a character is already lowercase, or if it is a special character, ignore it.

const strToLower = (text) => {
    let splitWord = text.split('');
    for (let i = 0; i < splitWord.length; i++) {
        let charCode = text.charCodeAt(i)
        if (charCode > 64 && charCode < 91) {
            splitWord[i] = String.fromCharCode(charCode + 32)
        }
    }
    return splitWord.join('')
}

console.log(strToLower('aAbBCc'));
console.log(strToLower('a+A'));
console.log(strToLower('DoeS-iT+w0rK?'));
