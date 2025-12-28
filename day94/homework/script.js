// შექმენით ფუნქცია რომელიც მომხმარებელს მიესალმება, 'გამარჯობა {მომხმარებლის შემოტანილი სახელი} (გამოძახების დროს უკვე იმ ცვლადს გადასცემთ მნიშვნელობად სადაც ინახავთ შემოტანილ მნიშვნელობას.

function greet(a){
    console.log(`Hello, ${a}`)
}

greet(prompt("Enter your name"))
greet(prompt("Enter your name second"))
greet(prompt("Enter your name third"))

// შექმენით კალკულატორის ფუნქცია, რომელსაც უნდა გადაეცეს სამი არგუმენტი. ორი რიცხვი და 1 მოქმედება უნდა იყოს.

function calculator(num1, num2, op){
    if(op == "დამატება") {
        return num1 + num2
    } else if(op == "გამოკლება"){
        return num1 - num2
    } else if(op == "გაყოფა"){
        return num1 / num2
    } else if(op == "გამრავლება") {
        return num1 * num2
    }
}
console.log(calculator(1, 2, "დამატება"))
console.log(calculator(10, 2, "გაყოფა"))
console.log(calculator(5, 2, "გამრავლება"))

// შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად სია. ამ სიაში უნდა იყოს მინიმუმ 5 რიცხვი. ფუნქციამ უნდა დააბრუნოს ამ სიაში მყოფი რიცხვების ჯამი.

function sumn(a){
    result = 0
    for(let i = 0; i < a.length; i++) {
        result += a[i]
    }
    return result
}
console.log(sumn([1,2,3,4,5]))
console.log(sumn([10,11,12,13]))
console.log(sumn([50,51,52,53]))

// შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად რიცხვი. დააბრუნეთ ამ რიცხვის კუბი.

function kubi(a){
    return a ** 2
}
console.log(kubi(10))
console.log(kubi(5))
console.log(kubi(7))

// შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად სახელი. და დააბრუნეთ არის თუ არა თქვენი სახელის ტოლი.

function nameCheck(name){
    myName = "Zuka"
    if(name == myName) {
        console.log("შენი სახელი ემთხვევა ჩემს სახელს")
    } else{
        console.log("არ ემთხვევა შენი სახელი ჩემს სახელს")
    }
}
console.log(nameCheck("Gio"))
console.log(nameCheck("Zuka"))
console.log(nameCheck("Saba"))

// შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვი. და 1-დან ამ რიცხვის ჩათვლით ყველა რიცხვს შეკრიბავს.

function sumBack(a){
    result = 0
    for(let i = 0; i <= a; i++) {
        result += i
    }
    return result
}
console.log(sumBack(5))
console.log(sumBack(2))
console.log(sumBack(10))

//  ეს ფუნქციები გამოიძახეთ 3-ჯერ  და გადაეცით სხვადასხვა მნიშვნელობები. 
