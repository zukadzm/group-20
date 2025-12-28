// წინა გაკვეთილის დავალება შეასრულეთ ყველამ გამონაკლისების გარეშე. და მასალა

// გ ა დ ა ი მ ე ო რ ე თ   !!!

// შექმენით ფუნქცია რომელიც შეამოწმებს არგუმენტად გადაცემული მნიშვნელიბა არის თუ არა პალინდრომე.

function palindrome(a){
    for(let i = 0; i < a.length; i++) {
        if(a[i] == a[i.length - 1]) {
            console.log("პალინდრომია")
        } else {
            console.log("არ არის პალინდრომი")
        }
    }
}
palindrome("Ana")

// შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სტრინგიდან ხმოვნებს ჩაანაცვლებს და მათ მაგივრად *-ს გამიაჩენს.

function xmovnebi(a){
    let result = ""
    let vowels = "aeiou"
    for(let i = 0; i < a.length; i++) {
        if(vowels.includes(a[i])) {
            result += "*"
        } else{
            result += a[i]
        }
    }
    return result
}
console.log("hello")

// შექმენით ფუნქცია რომელიც გადაცემულ სტრინგში სიმბოლოებს შეუცვლის ქეისებს. (რომელი ასოც წერია პატარად იმას დიდად დაწერს და პირიქით)

function makelower(a){
    let result = ""
    for(let i = 0; i < a.length; i++){
        let c = a[i]
        if(c == toLowerCase()) {
            result += c.toUpperCase()
        } else{
            result += c.toLowerCase()
        }
    }
    return result
}

console.log(makelower("nadfadf"))

// შექმენით ფუნქცია რომელსაც გადაეცემა სია. ამ სიაში უნდა იყოს სიები. და თითოეულ სიაში უნდა იყოს რამე სახელი და მეორე არგუმენტად რიცხვი. და ამ ფუნქციამ უნდა დააბრუნოს ისეთი სიები, რომლებშიც პირველ ინდექსზე მყოფი რიცხვის მნიშვნელობა იქნება 18-ზე მეტი.

function listnFilter(arr){
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][1] > 18) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(listnFilter([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))