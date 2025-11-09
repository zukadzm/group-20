// for loop - ის გამოყენებით გამოიტანეთ 0-დან 200-მდე რიცხვები.

for(let i = 0; i < 200; i++){
    console.log(i)
}

// for loop - ისგამოყენებით გამოიტანეთ რიცხვები 5-დან 300-მდე 10-ის მიმატებით.

for(let i = 5; i <=300; i+=10){
    console.log(i)
}

// for loop-ის გამოყენებით 100-დან 1-ის ჩათვლით უკუსვლით გამოიტანეთ ყველა რიცხვი.

for(let i = 0; i < 100; i--){
    console.log(i)
}

// for loop - ის გამოყენებით, მომხმარებლის შემოტანილი რიცხვის ჩათვლით შეკრიბეთ ყველა რიცხვი და გამოიტანეთ საბოლოო ჯამი.


let num = Number(prompt("Enter yout number"))
let sum = 0;

for(let i = 0; i <= num; i++){
    sum += i
}
console.log("sum",sum)


// 4-დან 100-მდე გამოიტანეთ ყველა კენტი რიცხვი. ოღონდ შეამოწმეთ if/else-თი.

for(let i = 0; i <100; i ++) {
    if(i % 3 === 0){
        console.log(i)
    } else {
        console.log("ლუწი")
    }
}

// მომხარებლის შემოტანილი რიცხვის ჩათვლით გამოიტანეთ ყველა რიცხვი და გვერდით ეწეროს ლუწია თუ კენტი. მაგალითად ასე:
// “1 არის კენტი”
// “2 არის ლუწი”

for(let i = 0; i < 100; i++) {
    if(i % 2 === 0) {
        console.log(i,"არის ლუწი")
    } else {
        console.log(i, "არის კენტი")
    }
}

// მომხმარებელს შემოატანინეთ ორი რიცხვი. და ამ ორი რიცხვის შიგნით მყოფი ყველა რიცხვი შეკრიბეთ.

let firstUser = Number(prompt("Enter first Number"))
let secondtUser = Number(prompt("Enter second Number"))

sum = firstUser + secondtUser;
console.log(sum)