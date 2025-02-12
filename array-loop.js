// // reverse task
let words = ["Abul ", true, 58, false];
let words_rev = words.reverse();
for (let word of words) console.log(word);

// Write a JavaScript code to reverse the array colors without using the reverse method.
const numbers = ["red", "blue", "green", "yellow", "orange"];
const reverse = [];
for (let number of numbers) {
  reverse.unshift(number);
}
console.log(reverse);

// while loop use
let rev = [];
let i = 0;
while (i <= numbers.length - 1) {
  rev.unshift(numbers[i]);
  i++;
}
console.log(rev);

// যেকোনো লুপিং পদ্ধতি ব্যবহার করে একটি অ্যারে থেকে জোড় সংখ্যা বের করার জন্য JavaScript কোড লিখুন।

//

let countryName = " Palestine";
if (countryName.trim() == "Palestine") {
  console.log(countryName.repeat("   5"));
} else {
  console.log("fat");
}
