// შექმენით სია, სადაც შეინახავთ 10 სახელს. ამ სიის თითოეული ელემენტი გამოიტანეთ ოღონდ ელემენტების გამოტანა დაიწყეთ ბოლო ინდექსიდან.
let names = ["Giorgi", "Zuka", "Luka", "Sandro", "Gigi", "Nika", "Levani", "Saba", "Ani", "Tamar"];

for(let i = names.length - 1; i >= 0; i--) {
    console.log(names[i])
}

// მომხმარებელს შემოატანინეთ ტექსტი და ამ ტექსტის პირველი და ბოლო სიმბოლოები გამოიტანეთ ერთად.
// მასალა გადაიმეორეთ კარგად.

let User = prompt("Enter Texts");
console.log(User[0] + User[User.length - 1]) 

// ეს დავალებები იყო კითხვებად. გააკეთეთ ყველა! (:

// მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ ლუწია თუ კენტი.

let User1 = Number(prompt("Enter Number"));

if(User1 % 2 === 0) {
    console.log("ლუწია")
} else {
    console.log("კენტია")
}

// მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ არის თუ არა 3-ის ჯერადი.

let User2 = Number(prompt("Enter Number"));

if(User2 % 3 === 0) {
    console.log("3 ის ჯერადია")
} else {
    console.log("არ არის 3 ის ჯერადი")
}

// მომხმარებელს შემოატანინეთ რიცხვი და ამ რიცხვის ჩათვლით ყველა რიცხვი გადაამრავლეთ.

let User3 = Number(prompt("Enter Number"));
let sum = 1;

for(let i = 1; i <= User3; i++) {
    sum *= 1;
}
console.log(sum)


// მომხმარებელს შემოატანინეთ ტექსტი და გაიგეთ ეს ტექსტი არის თუ არა პალინდრომე (for loop-ის გამოყენებით).

let UserStr = prompt("Enter Text");
let reversed = "";
for(let i = UserStr.length - 1; i >= 0; i--) {
    reversed += UserStr[i];
}

if(UserStr === reversed) {
    console.log("პალინდრომია")
} else {
    console.log("არ არის პალინდრომი")
}


// მომხმარებელს შემოატანინეთ ჯგუფის სახელი სანამ არ შემოიტანს 19-20-33-ს.

let group = "";

while(group !== "19" && group !== "20" && group !== 33) {
    group = prompt("შეიყვანე ჯგუფის სახელი")
}
console.log(group)

// შექმენით სია სადაც ჯგუფის ყველა მოსწავლის სახელს შეინახავთ და კონსოლში გამოიტანეთ ყველა.

let GroupMemberNames = ["Giorgi", "Zuka", "Luka", "Sandro", "Gigi", "Nika", "Levani", "Saba", "Ani", "Tamar"] 
console.log(GroupMemberNames)

// მომხმარებელს შემოატანინეთ გრძელი ტექსტი და ასო ა სადაც იქნება შეცვალოს @-თი.

let txt = prompt("Enter Txt");
let newTxt = "";

for(let i = 0; i < txt.length; i++) {
    if (txt[i] === "a") {
        newTxt += "@";
    } else {
        newTxt += txt[i];
    }
}
console.log(newTxt)

// მომხმარებელს შემოატანინეთ რიცხვი და გამოიტანეთ კონსოლში, ამოდის თუ არა ამ რიცხვიდან ფესვი.

let userNumber = Number(prompt("Enter your number"))
console.log("ფესვი",Math.sqrt(userNumber)) // ვიცი Math ჯგუფ 34 ში ვისწავვლე

// მომხმარებელს შემოატანინეთ რიცხვი და ამ რიცხვის კვადრატი გამოიტანეთ.

let userNumber1 = Number(prompt("Enter your number"))
console.log("კვადრატი",userNumber1 * userNumber1)

// მომხმარებელს შემოატანინეთ რიცხვი, ოღონდ გაიგეთ ეს რიცხვი ათწილადია თუ მთელი.


let userNumber2 = Number(prompt("Enter your number"))

if(userNumber2 % 1 === 0) {
    console.log("მთელი")
} else {
    console.log("ათწილადი")
}

// მომხმარებელს შემოატანინეთ რიცხვი და ტექსტი. ამ ტექსტში მე0 ინდექსიდან შემოტანილი ინდექსის ჩათვლით გამოიტანეთ ყველა ასო გაერთიანებულად 2-ის გამოტოვებით.

// let index = Number(prompt("შეიყვანეთ რიცხვი (ინდექსი):"));
// let t = prompt("შეიყვანეთ ტექსტი:");
// let result = "";

// for (let i = 0; i <= index; i += 2) {
//   result += t[i];
// }

// console.log(result);

let userNumber3 = Number(prompt("Enter your number"))
let txt2 = prompt("Enter txt")
let result = "";
for(let i = 0; i <= userNumber3; i+=2){
    result += txt2[i]
}
console.log(result)

// შექმენით 20 ელემენტიანი სია. მომხმარებელს შემოატანინეთ რიცხვი და შემოტანილი ინდექსის ჩათვლით გამოიტანეთ ყველა ელემენტი ცალცალკე (While loop) .


let listnNumber = [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20]

let userIndex = Number(prompt("Enter index 0 to 19"))
let i = 0;

while(i <= userIndex) {
    console.log(userIndex[i]);
    i++;
}



// შექმენით სია სადაც იქნება 10 ელემენტი. for და while loop-ების გამოყენებით გამოიტანეთ თითოეული ელემენტი .

let listnNumber1 = [1,2,3,4,5,6,8,9,10]
for(let i = 0; i < listnNumber1.length; i++) {
    console.log(listnNumber1[i])
}

let listnNumber2 = [1,2,3,4,5,6,8,9,10]
let i1 = 0;
while(i1 < listnNumber2.length) {
    console.log(listnNumber2[i1])
    i1++
}

// შექმენით სია ,სადაც მოათავსებთ მხოლოდ სახელებს,თქვენი დავალებაა რომ კონსოლში გამოიტანოთ ყველა ის სახელი რომელიც იწყება ასო ბგერა "ა" ზე ასევე მთავრდება ასო ბგერა "ი" ზე ასევე სახელის სიგრძე არის 5 ზუსტად 5 ტოლი.

let names2 = ["Amirani", "Ana", "Giorgi", "Gia"]

for(let i = 0; i < names2.length; i++) {
    let name = names2[i];
    if(name[0] === "a" && name[name.length - 1] === "i" && name.length === 5) {
        console.log(name)
    }
}