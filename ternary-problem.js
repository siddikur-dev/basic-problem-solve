// Problem-1. সংখ্যা জোড় না বিজোড় চেক করা
let number = 21;
let num = number % 2 === 0 ? "Even" : "Odd";
console.log(num);

// Problem-2.  ইউজারের লগইন স্ট্যাটাস দেখানো

let login = true;
let user = login == true ? "Login Successful" : "Please login";
console.log(user);

// Problem-3. দুটি সংখ্যার মধ্যে বড় সংখ্যাটি রিটার্ন করবে—এমন একটি টার্নারি অপারেটর লিখো।

let number1 = 29;
let number2 = 99;

let bigNumber = number1 > number2 ? "number1 big" : "number2 big";
console.log(bigNumber);

// Problem-4.  1️একটি সংখ্যা পজিটিভ হলে "Positive", নেগেটিভ হলে "Negative", এবং শূন্য হলে "Zero" রিটার্ন করবে—এমন একটি টার্নারি অপারেটর লিখো।

let numberType = 0;
let numType =
  numberType > 0 ? "positive" : numberType < 0 ? "negative" : "zero";
console.log(numType);

// Problem-5. একজন ব্যবহারকারী যদি "admin" হয়, তবে "Welcome Admin" দেখাবে, অন্যথায় "Access Denied" দেখাবে—এমন একটি টার্নারি অপারেটর লিখো।

let admin = false;
let dashboard = admin ? '"Welcome Admin"' : '"Access Denied"';
console.log(dashboard);

// Problem-6. কোনো সংখ্যা ৫ এবং ১১ উভয় সংখ্যা দ্বারা বিভাজ্য হলে "Divisible", না হলে "Not Divisible" দেখাবে—এমন একটি টার্নারি অপারেটর লিখো।

let divisible = 88;
let visibleBoard =
  divisible % 5 === 0 && divisible % 11 === 0
    ? '"Divisible"'
    : '"Not Divisible"';
console.log(visibleBoard);

// Problem-7. একজন ব্যক্তি ১৮ বা তার বেশি বয়স হলে "Eligible for voting" আর না হলে "Not eligible" রিটার্ন করবে—এমন একটি টার্নারি অপারেটর লিখো।

let ageForVoting = 18;
let votingTime =
  ageForVoting >= 18 ? '"Eligible for voting"' : '"Not Eligible for voting" ';
console.log(votingTime);

//Problem-8. ব্যাংক ব্যালেন্স ১০০০ টাকার বেশি হলে ‘Transaction Successful’, না হলে ‘Insufficient Balance’ রিটার্ন করবে—এমন একটি টার্নারি অপারেটর লিখো।

let balance = 8800;
let bankBalance =
  balance > 1000 ? '"Transaction Successful"' : '"Insufficient Balance"';
console.log(bankBalance);

//Problem-9. একটি নাম যদি "A" দিয়ে শুরু হয়, তবে "Starts with A" দেখাবে, না হলে "Does not start with A" দেখাবে—এমন একটি টার্নারি অপারেটর লিখো।
let namePerson = "Alif";
let Personboard = namePerson.startsWith("A")
  ? '"Starts with A"'
  : '" Does not starts with A"';
console.log(Personboard);

//Problem-10. একটি স্ট্রিং যদি ১০ অক্ষরের বেশি হয়, তবে "Long String" দেখাবে, না হলে "Short String" দেখাবে—এমন একটি টার্নারি অপারেটর লিখো।

let stringName = "Siddikur Rahman Siam";
let stringboard = stringName.length > 10 ? '"Long String"' : '"Short String"';
console.log(stringboard);
