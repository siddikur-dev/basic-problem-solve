// প্রবলেম: সবচেয়ে বড় সংখ্যা খুঁজে বের করো (Array & Loop)
const numbers1 = [12, 45, 78, 23, 89, 56, 99, 34];

// evabe korsi
let numberArray = 0;
for (let i = 0; i <= numberArray; i++) {
  if (i > numberArray) {
    let bigNUmber = numbers1[i];
    console.log(bigNUmber);
  }
}

// প্রবলেম: শুধুমাত্র জোড় সংখ্যা প্রিন্ট করো (Array, Loop & Condition)
const numbers = [10, 25, 30, 47, 52, 61, 70, 85, 90];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(`It's Even Number: ${numbers[i]}`);
  }
}

// 3️⃣ প্রবলেম: অবজেক্ট থেকে নির্দিষ্ট প্রপার্টি প্রিন্ট করো (Object & Loop)
// তোমার কাছে একটি স্টুডেন্ট অবজেক্ট আছে। তুমি অবজেক্টের key এবং value প্রিন্ট করো।
let student = {
  name: "Alice",
  age: 20,
  grade: "A",
  city: "New York",
  isGraduated: false,
};
let studentValue = Object.values(student);
let studentKey = Object.keys(student);
console.log(`Student Key: ${studentKey}`);
console.log(`Student Value: ${studentValue}`);

// 4️⃣ প্রবলেম: অবজেক্টের ভিতরে অ্যারে থেকে নির্দিষ্ট নাম খুঁজে বের করো (Object, Array, Loop & Condition)
const classroom = {
  className: "JavaScript Basics",
  students: ["John", "Jane", "Alice", "Bob", "Eve"],
};
console.log(classroom.students[2].replace("Alice", "Alice is in the class"));
