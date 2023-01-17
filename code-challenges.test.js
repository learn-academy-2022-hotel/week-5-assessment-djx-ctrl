// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// RED:

describe("codedMessage", () => {
    it("takes in a string and returns coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ takes in a string and returns coded message

// ● codedMessage › takes in a string and returns coded message

//   ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSUEDOCODE:
// declare a funciton named codedMessage
// input: string
// output: string
// Process: create an object letterKey and establish the keys as letters and values as numbers. created a funciton codedMessaged which searches through given string using replace method and using regex pulls out specific letters and once those letters are isolated look through the letterKey that was created and replace the letter with the number that corresponds.
// Reference link: https://stackoverflow.com/questions/59185978/create-a-function-that-takes-a-string-as-an-argument-and-returns-a-coded-h4ck3r

const letterKey = {a: 4, e: 3, i: 1, o: 0, E: 3}

const codedMessage = (string) => {
   return string.replace(/[aeioE]/g, (t) => letterKey[t])
}

console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))
console.log(codedMessage(secretCodeWord3))
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns coded message (2 ms)

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// RED:

describe("fruitWords", () => {
    it("returns array of all words with particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(fruitWords(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(fruitWords(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// FAIL  ./code-challenges.test.js
// fruitWords
//   ✕ returns array of all words with particular letter (1 ms)

// ● fruitWords › returns array of all words with particular letter

//   ReferenceError: fruitWords is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSUEDOCODE:
// declare a function named fruitWords
// input: array and string
// output: array
// Process: created a function fruitWords. passed arr and letter as parameters. filtered through arr with specified condition includes. once its filtered and finds specific letter return the full word in a array.
// Reference link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#:~:text=The%20filter()%20method%20is,included%20in%20the%20new%20array

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

const fruitWords = (arr, letter) => {
    return arr.filter((arr) => arr.toLowerCase().includes(letter.toLowerCase()))
}

console.log(fruitWords(fruitArray, letterA))
console.log(fruitWords(fruitArray, letterE))
// PASS  ./code-challenges.test.js
// fruitWords
//   ✓ returns array of all words with particular letter (1 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// RED:

describe("allHands", () => {
    it("determines whether or not array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
        expect(allHands(hand1)).toEqual(true)
        expect(allHands(hand2)).toEqual(false)
        expect(allHands(hand3)).toEqual(false)
        expect(allHands(hand4)).toEqual(true)
    })
})
// FAIL  ./code-challenges.test.js
// allHands
//   ✕ determines whether or not array is a full house

// ● allHands › determines whether or not array is a full house

//   ReferenceError: allHands is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSUEDOCODE:
// declare a function named allHands
// input: array of numbers
// output: boolean
// Process:
// *** Note: I utilized my resources (Google, classmates) and I was not able to fully grasp what was being explained to me about how certain code was written. So I was not able to write any code for this third challenge.

const allHands = (array) => {

}