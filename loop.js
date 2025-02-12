// Problem-1. "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this."

// While loop
let day = 0;
while (day <= 60) {
  console.log(
    ` number${day}: "I will invest at least 6 hrs every single day for next 60 days! "`
  );
  day++;
}

// for loop
for (dayfor = 0; dayfor <= 60; dayfor++) {
  console.log(
    ` "I will invest at least 6 hrs every single day for next 60 days!"  number${dayfor} `
  );
}

// // Proble-2 .Find all the odd numbers from 61 to 100.

// While loop
let number = 61;
while (number <= 100) {
  console.log("odd number:", number);
  number += 2;
}

// for loop
for (let nUmBur = 61; nUmBur <= 100; nUmBur += 2) {
  console.log(nUmBur, `odd number`);
}

// // Problem-3. Find all the even numbers from 78 to 98.

// while
let num = 78;
while (num <= 98) {
  console.log(`Even Number`, num);
  num += 2;
}

// for
for (let numbers = 78; numbers <= 98; numbers++) {
  if (numbers % 2 === 0) {
    console.log(numbers, "  even number`");
  }
}

// Problem-4. Display sum of all the odd numbers from 81 to 131.

// while loop
let number1 = 81;
let number1Sum = 0;
while (number1 <= 131) {
  if (number1 % 2 !== 0) {
    console.log(number1);
    number1Sum = number1 + number1Sum;
  }
  number1++;
}
console.log(` Odd Number: ${number1Sum} `);

// for loop
let number2Sum = 0;
for (let i = 81; i <= 131; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    number2Sum += i;
  }
}
console.log(` use for loop odd number:  ${number2Sum}`);

// Problem-5. Display sum of all the even numbers from 206 to 311.

//While loop
let number3 = 206;
let number3Sum = 0;
while (number3 <= 311) {
  if (number3 % 2 == 0) {
    console.log(number3);
    number3Sum = number3 + number3Sum;
  }
  number3++;
}
console.log(`even number: ${number3Sum}`);

// for loop
let number4Sum = 0;
for (let i = 206; i <= 311; i++) {
  if (i % 2 === 0) {
    console.log(i);
    number4Sum = number4Sum + i;
  }
}
console.log(`use for loop: ${number4Sum}`);

// // Problem-6. As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

let number5 = 0;
let number5Sum = 5;
let number5SumTotal = 0;
while (number5 < 10) {
  number5++;
  let lastPart = `${number5 * number5Sum}`;
  let newVariable = `${number5} * ${number5Sum} = ${lastPart}`;
  console.log(newVariable);
}

// for loop

let multiplication = 5;
for (let i = 0; i <= 10; i++) {
  forLoopUse = `${multiplication} * ${i} = ${multiplication * i}`;
  console.log(forLoopUse);
}
// // Problem-7. Write a program that prints all the odd numbers from 50 to 30.

// While Loop
let number6 = 50;
let number6Sum = 0;
while (number6 >= 30) {
  if (number6 % 2 !== 0) {
    console.log(number6);
    number6Sum += number6;
  }
  number6--;
}
console.log(`Odd Number Sum: ${number6Sum}`);

// for loop
let oddNumberSum = 0;
for (let i = 50; i >= 30; i--) {
  if (i % 2 !== 0) {
    console.log(i);
    oddNumberSum += i;
  }
}
console.log(`for loop use: ${oddNumberSum}`);

// // Problem-8. একটি প্রোগ্রাম লিখো যা ১ থেকে ১০০ পর্যন্ত সব সংখ্যা যোগ করে তার মোট যোগফল প্রিন্ট করবে।

// while
let number7 = 1;
let number7Sum = 0;
while (number7 <= 100) {
  console.log(number7);
  number7++;
  number7Sum += number7;
}
console.log(`All Number Sum: ${number7Sum}`);

// for loop
let number8Sum = 0;
for (let i = 1; i <= 100; i++) {
  console.log(i);
  number8Sum += i;
}
console.log(`for loop use all number sum: ${number7Sum}`);

// // Problem-9. একটি প্রোগ্রাম লিখো যা ১৫ থেকে ২৫ পর্যন্ত সব সংখ্যা গুন করে তার গুণফল প্রিন্ট করবে।

// while loop
let programNumber = 15;
let programNumber1 = 25;
while (programNumber <= programNumber1) {
  let newVariable = `${programNumber}*${programNumber}`;
  let newVariable1 = `${newVariable} = ${programNumber * programNumber}`;
  console.log(newVariable1);

  programNumber++;
}

// for loop
for (let i = 15; i <= 25; i++) {
  // console.log(i);
  let secondVar = `${i}*${i}`;
  let secondVar1 = `${secondVar}= ${i * i}`;
  console.log(`for loop use:  ${secondVar1}`);
}

//// Problem-10.  ১ থেকে ৫০ পর্যন্ত সমস্ত সংখ্যার যোগফল বের করুন।

// while loop
let number9 = 1;
let number09 = 0;
while (number9 <= 50) {
  console.log(number9);
  number09 += number9;
  number9++;
}
console.log(`sum all number: ${number09}`);

// for loop
let number010 = 0;
for (let i = 1; i <= 50; i++) {
  console.log(i);
  number010 += i;
}
console.log(`for loop use: ${number010}`);

//// Problem-Bonus.  ১০ থেকে ১ পর্যন্ত সমস্ত সংখ্যার গুণফল বের করুন।
let numBonus = 1;
for (let i = 10; i >= numBonus; i--) {
  // console.log(numBonus);
  gun = `${i}*${i}`;
  console.log(`${gun}=${i * i}`);
}

// while loop
let bonusProblem = 10;
while (bonusProblem >= 1) {
  let gunfol = `${bonusProblem}*${bonusProblem}`;
  console.log(`${gunfol} = ${bonusProblem * bonusProblem}`);
  bonusProblem--;
}

// for loop
for (let i = 10; i >= 1; i--) {
  let forLoop = `${i} * ${i}`;
  console.log(`use for loop: ${forLoop} = ${i * i}`);
}
