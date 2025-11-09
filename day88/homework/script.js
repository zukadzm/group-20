// while loop - ის გამოყენებით კონსოლში გამოიტანეთ 10-ჯერ თქვენი სახელი.


let i = 0;

while (i < 10) {
    console.log("ზუკა");
    i++
}


// While loop -ის გამოყენებით მომხმარებელს შემოატანინეთ სახელი მანამ სანამ არ დაემთხვევა თქვენს სახელს.

let myName = "Zuka";
let username = "";

while (username !== myName) {
    username = prompt("Enter your name");
}
console.log("სწორია")

// შექმენით სია და ამ სიის თითოეული ელემენტი გამოიტანეთ while loop-ის გამოყენებით.


let listn = [1,2,3,4,5];
let i2 = 0;

while(i < listn.length) {
    console.log(listn[i])
    i2++;
}

// მომხმარებელის შემოტანილი რიცხვის ჩათვლით გამოიტანეთ ყველა ლუწი რიცხვი while loop-ის გამოყენებით.


let num = Number(prompt("Enter number"))
let i3 = 0;

while(i <= num) {
    if(i % 2 === 0){
        console.log(i)
    }
    i++;
}


// შექმენით 4 სია. ერთში გექნებათ 3 String ტიპის მონაცემი. მეორეში Number ტიპის, მესამეში bool ტიპის და მეოთხეში სიები.


let strs = ["idk1", "idk2", "idk3"];

let numbers = [1,2,3,4];

let bools = [true, false, true];

let lists = [
    [1,2,3],
    ["idk1", "idk2"],
    [true, false]
]

// კომენტარის სახით დაწერეთ რა მსგავსება / განსხვავებას ხედავთ while და for loop-ებს შორის.

// for loop ში არ გვიწევს წვალება, while loop ში გვიწევს რო ინტერაცია ჩვენით შევქმნათ, ნუ for loop შიც მაგრამ სულ სხვანაირად

