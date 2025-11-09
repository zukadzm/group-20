// 1)მოცემულია სია:
// colors = ['red', 'green', 'blue', 'yellow']
// შეცვალე ისე, რომ პირველი ელემენტი შეცვალო "DarkRed" ით და ბოლო ელემენტი შეცვალო "Orange" ით

colors = ['red', 'green', 'blue', 'yellow']

colors[0] = "DarkRed";
colors[3] = "Orange";
console.log(colors)

// 2)მოცემულია სია:

// fruits = ['apple', 'banana', 'cherry', 'date', 'fig']

// შეცვალე სიის მესამე ელემენტი 'orange' ით. სიის ბოლო ელემენტი "cucumber" ით და სიის მეოთხე ელემენტი "potato" ით

fruits = ['apple', 'banana', 'cherry', 'date', 'fig']

fruits[2] = "orange";
fruits[4] = "cucumber"
fruits[3] = "potato"

console.log(fruits)

// 3)მოცემულია სია:

// numbers = [10, 25, 30, 48, 50, 64 , 70 , 87]

// დაალაგე რიცხვების თანმიმდევრობა,შეცვალე შესაბამისი ელემენტი იმ რიცხვით რომელიც გამოასწორებს რიცხვების მიმდევრობას:თანმიმდევრობა უნდა იყსო შემდეგნაირი --> 10 20 30 .... 80

numbers = [10, 25, 30, 48, 50, 64 , 70 , 87]

numbers[1] = 20;
numbers[3] = 40;
numbers[5] = 60;
numbers[7] = 70;

console.log(numbers)

// 4)მოცემულია სია:

// days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

// შეცვალე ისე, რომ პირველი ორი დღე შეიცვალოს 'Weekend1' და 'Weekend2' მნიშვნელობებით.

days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

days[0] = "Weekend1";
days[1] = "Weekend2";

console.log(days)
// 5)მოცემულია სია:

// fruits = ['apple', 'banana', 'cherry']

// დაბეჭდე თითოეული ელემენტი ინდექსების გამოყენებით ცალ ცალკე.

fruits = ['apple', 'banana', 'cherry']

console.log(fruits[0],fruits,[1],fruits[2])

// 6)მოცემულია მასივი:

// const colors = ['red', 'green', 'blue', 'yellow'];

// გამოიტანე ყველა ფერი for ციკლის გამოყენებით

const colors1 = ['red', 'green', 'blue', 'yellow'];

for(let i = 0; i < colors1.length, i++) {
    console.log(colors1[i])
}

// 7)მოცემულია სია:

// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

// შენი დავალებაა რომ კონსოლში გამოიტანო თითოეული ელემენტი ცალ ცალკე გამოიყენე while loop

let days2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
let i = 0;
while(i < days.length) {
    console.log(days2[i])
    i++
}

// 8)შექმენი სია,სადაც მოათავსებთ მხოლოდ რიცხვებს,

// ტერმინალში გამოიტანეთ სიაში მყოფი მხოლოდ ლუწი რიცხვები (შეასრულეთ ორივეთი for და while)

let listn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(let i = 0; i < listn.length; i++) {
    if(i % 2 === 0) {
        console.log(listn[i])
    } 
}

let i4 = 0;

while(i4 < listn.length){
    if(i4 % 2 === 0) {
        console.log(listn[i])
    }
}

// 9)შექმენი სია,სადაც მოათავსებთ მხოლოდ რიცხვებს,

// ტერმინალში გამოიტანეთ სიაში მყოფი მხოლოდ კენტი რიცხვები (შეასრულეთ ორივეთი for და while)

let listn1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(let i = 0; i < listn1.length; i++) {
    if(i % 2 === 0) {
        console.log(listn1[i])
    } 
}

let i5 = 0;

while(i5 < listn.length){
    if(i5 % 2 === 0) {
        console.log(listn[i5])
    }
}


// 10)შექმენი სია სადაც მოათავსებ ადამიანის სახელებს

// შენი დავალებაა რომ კონსოლში გამოიტანო მხოლოდ ის სახელები რომლებიც იწყება ასო "a" ზე და მრთავდება ასო "o" ზე (შეასრულეთ ორივეთი for და while)

let names = ["Zuka", "Gio", "Nika", "Luka"];

for(let i = 0; i < names.length; i++) {
    let name = names[i];
    if(name[0] === "a" && name[name.length - 1] === "0") {
        console.log(name)
    }
}

// 11)შექმენი ცვლადის სადაც შეინახავ სტრინგს --> "სადგური"

// შენი დავალებაა რომ ინდექსების გამოყენებით ასევე while და for ციკლის გამოყენებით ტერმინალში გამოიტანო თითოეული ასო
 
// let word = "სადგური";

// // for
// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

let word = "სადგური";
for(let i = 0; i < word.length; i++) {
    console.log(word[i])
}

let i6 = 0;

while(i6 < word.length) {
    console.log(word[i6])
    i6++;
}

// 12)შექმენი ცვლადის სადაც შეინახავ სტრინგს --> "ჰიდროელექტროსადგური"

// შენი დავალებაა რომ ტერმინალში გამოიტანო "სადგური" ასევე "ელექტრო"

// მინიშნება:ამოიღეთ სტრინგიდან შესაბამისი ასოები რაც გჭირდებათ და მოახდინეთ მათი კონკტინაცია


let txt = "ჰიდროელექტროსადგური"
let electro = [6] + [7] + [8] + [9] + [10] + [11] + [12] + [13]
console.log(electro)

let sadguri = 
    txt[txt.length - 8] + 
    txt[txt.length - 7] +
    txt[txt.length - 6] +
    txt[txt.length - 5] +
    txt[txt.length - 4] +
    txt[txt.length - 3] +
    txt[txt.length - 2] +
    txt[txt.length - 1];
console.log(sadguri)
