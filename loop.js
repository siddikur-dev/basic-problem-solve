// Problem-1. "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this."

// While loop
let day = 0;
while (day <= 60){
    console.log(` number${day}: "I will invest at least 6 hrs every single day for next 60 days! "`);
    day++;
}

// for loop
for (  dayfor = 0; dayfor <= 60; dayfor++){
    console.log( ` "I will invest at least 6 hrs every single day for next 60 days!"  number${dayfor} `);
}



// // Proble-2 .Find all the odd numbers from 61 to 100.

let number = 61;
while ( number <= 100){
    console.log("odd number:", number);
    number+=2;
}

// for loop
for (let nUmBur= 61; nUmBur <= 100; nUmBur+=2){
    console.log(nUmBur, `odd number`);
}

// // Problem-3. Find all the even numbers from 78 to 98.

// while
let num = 78;
while (num <= 98){
    console.log(`Even Number`, num);
    num += 2;
}


// for 
for (let numbers = 78; numbers <= 98; numbers++  ){
    if(numbers % 2 ===0){
        console.log( numbers, "even number`" );
    }
}

// // Problem-4. Display sum of all the odd numbers from 81 to 131.

let n = 81;
let sum = 0;
while (n <= 131){
   if(n % 2 ==0){
    console.log(n);
    
    n ++;
    sum = sum + n;
    console.log("Odd Number Sum:", sum);
   }
}


// // for 
// let osum = 0;
// for (let oNumber= 81; oNumber <= 131 ; oNumber+=2 ){
//     console.log(oNumber);
//     if()
//     osum = oNumber + osum;
//     console.log(osum, "Odd Number Sum😊");
// }

// // Problem-5. Display sum of all the even numbers from 206 to 311.

// let evenNumber = 206;
// let total = 0;
// while (evenNumber <= 311){
//     console.log(evenNumber);
//     evenNumber +=2;
//     sum = sum + evenNumber;
//     console.log("Even Number Sum:", sum);
// }

// // Problem-5. As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5


// let i = 1;
// let ersaNumber = 5;
// while (i <= 10){
//     console.log(`${ersaNumber} * ${i} = ${i*ersaNumber}`);
//     i++
// }

// // Problem-6. Write a program that prints all the odd numbers from 50 to 30.

// let count = 50;
// while (count >= 30){
//     if (count % 2 ==1){
//     console.log(count);}
//     count--;

// }

// // Problem-7. একটি প্রোগ্রাম লিখো যা ১ থেকে ১০০ পর্যন্ত সব সংখ্যা যোগ করে তার মোট যোগফল প্রিন্ট করবে।

// let numBer = 1;
// let numBerTotal = 0;
// while (numBer <=100){
//     console.log(numBer);
//     numBer++
//     numBerTotal = numBer + numBerTotal;
//     console.log(`${numBer} SUM:`, numBerTotal);

// }

// // Problem-8. একটি প্রোগ্রাম লিখো যা ১৫ থেকে ২৫ পর্যন্ত সব সংখ্যা গুন করে তার গুণফল প্রিন্ট করবে।

// let program = 15;
// let program1 = 1;
// while (program <= 25 ){
//     console.log(`${program} * ${program1} = ${program*program1} `);
//     program++
// }

// // let wl = 15;
// // while (wl <= 25) {
// //     console.log(`${wl} * ${wl} = ${wl * wl}`);
// //     wl++;
// // }
