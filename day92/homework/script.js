// მომხმარებელს შემოატანინეთ სიტყვა. ეს სიტყვა ჩაამატეთ სიის თავში იმ შემთხვევაში თუ ეს სიტყვა არ არის ამ სიაში. სხვა შემთხვევაში თვითონ ეს სიტყვა შეაბრუნეთ და სიის ბოლოში ჩაამატეთ.

let listn = ["d", "f"]
const user = prompt("Enter word")

if(!listn.includes(user)) {
    listn.unshift(user)
} else {
    user = user.reverse()
    user.append(listn)
}


// მოცემული გაქვთ სია, [10, 20, 30, 100, 40, 'Goa' ]. მომხმარებელს შემოატანინეთ ტექსტი და შეამოწმეთ არის თუ არა ეს ტექსტი ამ სიაში.

const user2 = prompt("Enter something")
lst = [10, 20, 30, 100, 40, 'Goa' ]
if(lst.includes(user2)) {
    console.log("არის")
} else {
    console.log("არ არის")
}

// მომხმარებელს შემოატანინეთ სიტყვა და ეს სიჯყვა გახლიჩეთ სათითაო სიმბოლოდ. და ისე ჩაამატეთ ახალ სიაში.


const user3 = prompt("Enter word")
let newArr = []

newArr.push(user3.split(""))

// მომხმარებელს შემოატანინეთ რიცხვი. შემდეგ სიტყვები შემოატანინეთ იმდენჯერ რა რიცხვიც შემოიტანა. შემდეგ ახალ სიაში ჩაამატეთ ყველა შემოტანილი სიტყვა. და გაფილტრეთ. თუ იქნება ისეთი სიტყვები რომლებიც მეორდება (ქეის სენსიტიურობა არ გაითვალისწინოს) ისინი ამოშალოს.

const user4 = Number(prompt("Enter your number"))

let newarr = []

newarr.push(user4)  // ვერ გავიგე

// მოცემული გაქვთ სია: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
// მომხმარებელს შემოატანინეთ ორი რიცხვი. შემოტანილი რიცხვებიდან, ყველაზე პატარა რიცხვი, რომელიც იქნება,  იმ რიცხვიდან გამოიტანეთ მეორე რიცხვის ჩათვლით ყველა ელემენტი, ინდექსების მიხედვით.

const user5 = Number(prompt("Enter first your ")) 
const user6 = Number(prompt("Enter second number"))

if(user5 < 5) {
    console.log("პატარა რიცხვი")
} else if (user6 < 5) {
    console.log("პატარა რიცხვია")
} else {
    console.log("დიდი")
}


// მოცემული გაქვთ სია: [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900] ეს სია დაალაგეთ ზრდადობით.


let listn2 = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900]

for(let i = 0; i < listn2.length; i++) {
    for(let j = 0; j < listn2.length - 1; j++) {
        if(listn2[j] > listn2[j + 1]) {
            let res = listn2[j]
            listn2[j] = listn2[j + 1]
            listn2[j + 1] = res
        }
     }
}
console.log(listn2)

// let numbers = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900];

// მოცემული გაქვთ სია:
// [
//     [1, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0], 
//     [0, 1, 0, 0, 1]
// ] // ერთი სია არის და ამ სიის შიგნით სამი სია,
// თითოეული ეს სია შეაერთეთ და გადაიყვანეთ ათობით სისტემაში. შემდეგ დაალაგეთ კლებადობით.

let listn3 = [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0], 
    [0, 1, 0, 0, 1]
] 

let result = []
for(let i = 0; < listn3.length; i++) {
    let num = 0;
    for(let j = 0; j < listn3.length; i++) {
        num = num * 2 + listn3
    }

    result.push(num)
}


for(let i = 0; i < result.length; i++) {
    for(let j = 0; j < result.length - 1; j++) {
        if(result[i] < result[j + 1]) {
            let res = result[j];
            result[j] = result[j + 1];
            result[j + 1] = res
        }
    }
}
