// შექმენით ფუნქცია, რომელიც დაგვიბრუნებს შემოტანილი მნიშვნელობა ლუწია თუ კენტი


function Check(number){
    if(number %2 == 0) {
        return "ლუწია"
    } else {
        return "კენტია"
    }
}
console.log(Check(10))

// შექმენით ფუნქცია, რომელიც მომხმარებლის შემოტანილი რიცხვის კვადრატს დაგვიბრუნებს.

function kvadrati(a){
    return a ** 2
}

console.log(kvadrati(prompt(Number("Enter your number to go kvadrati"))))