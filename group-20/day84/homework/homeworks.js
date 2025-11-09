// 1. კომენტარის სახით ახსენით ლოგიკური ოპერატორები.

//  True % False

// 2. კომენტარის სახით ახსენით რას გამოიტანს და რატომ: true || false  && false && 10 === 10.0

// True - || 
// False - &&

// 2 ში პასუხი იქნება False იმიტორო პირველი შესრულება არის True || False - აქ არის true, შემდეგ True && False && 10 აქ უკვე False, პასუხი False


// 3. კომენტარის სახით ახსენით რას გამოიტანს და რატომ: false && true || 'name' === 'Name' && 1 == '1'

// 3 ში გამოიტანს False, პირველი False შემდეგ name == Name false ანალოგიურა 1=='1' ზეც, პასუხი False

// 4. კომენტარის სახით ახსენით რას გამოიტანს და რატომ: true && false || !false == true & true

// აქ გამოიტანს 1-ს არვიცი რატო, დავაკონსოლე და 1 გამიოტანა

// 5. კომენტარის სახით ახსენით რას გამოიტანს და რატომ: !(10 > 5) === false && 10 > 3 && 20 == 10

// აქ გამოიტანს False, არალოგიკური პირობის გამო

// //  if - else გარეშე
// 6. მომხმარებელს შემოატანინეთ რიცხვი. და შეამოწმეთ იყოფა თუ არა 3-ზეც და 5-ზეც

// const userNumber = Number(prompt("Enter number"))

// console.log((userNumber 3 && === 0 || userNumber 5 && === 0))

// 7. მომხმარებელს შემოატანინეთ რიცხვი. და შეამოწმეთ იყოფა თუ არა 3-ზე ან 2-ზე მაინც

// const userNumber = Number(prompt("Enter number"))

// console.log((userNumber 3 && === 0 || userNumber 2 && === 0))

// 8. მომხმარებელს შემოატანინეთ რიცხვი. და შეამოწმეთ იყოფა თუ არა 4-ზე და 3-ზე ან 5-ზე მაინც

// const userNumber = Number(prompt("Enter number"))

// console.log((userNumber 4 && === 0 || userNumber 3 && === 0 || userNumber 5 && === 0))

// 9. მომხმარებელს შემოატანინეთ რიცხვი და სიტყვა. შეამოწმეთ ეგ სიტყვა თუ არის თქვენ მიერ ჩაფიქრებული სიტყვის ტოლი და რიცხვი თუა 10-ზე და 20-ზე ნაკლები.

// const userinput = Number(prompt("Enter number"))
// const myNumber = 15

// console.log(
//     (userinput === myNumber),
//     "Correct guess"
//     (userinput < 20),
//     "ნაკლებია"
//     (userinput < 10),
//     "ნაკლებია"
// )

// 10. მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ თუა მეტი 10-ზე ან 40-ზე ნაკლები. (ერთ-ერთი მაინც უნდა იყოს)

// const numberUser = Number(prompt("Enter number"))

// console.log(
//     (numberUser > 10),
//     "მეტია 10 ზე"
//     (numberUser < 40),
//     "ნაკლებია 40 ზე"
// )



// if - else -ს გამოყენებით
// 11. მომხმარებელს შემოატანინეთ რიცხვი და თუ შემოტანილი მნიშვნელობა იყოფა 100-ზე ამ 150-ზე მაშინ კონსოლში გამოიტანეთ 'ეს რიცხვი ან 100-ზე იყოფა ან 150-ზე'. სხვა დანარჩენ შემთხვევაში 'არასწორი რიცხვია'

// const userinput = Number(prompt("Enter your number"))

// if(userinput && 100) {
//     console.log("იყოფა 100 ზე ან 150 ზე")
// }

// 12. მომხმარებელს შემოატანინეთ ასაკი თუ მომხმარებლის ასაკი მეტია ან ტოლია 18 და ნაკლებია 60-ზე, გამოიტანე - 'უნდა იმუშავო'. სხვა დანარჩენ შემთხვევაში 'იმეცადინე'

// const userAge = Number(prompt("Enter your number"))
// if(userAge >= 18 || userAge < 60){ 
//     console.log("უნდა იმუშავო")
// } else{
//     console.log("იმეცადინე")
// }

// 13. მომხმარებელს შემოატანინე ასაკი და შეამოწმე, არის თუ არა ის ან 16-ზე ნაკლები, ან 65-ზე მეტი.

// const userAge = Number(prompt("Enter your number"))
// if(userAge < 18 && userAge > 65);

// 14. მომხმარებელს შემოატანინე რიცხვი და შეამოწმე, არის თუ არა ის 50–100 შუალედში ან ტოლი 200-ის.

// const userInput = Number(prompt("Enter your number"))
// if(userInput > 50 || userInput < 100 || userInput === 200){
//     console.log("CORRECT")
// } else{
//     console.log("WRONG")
// }

// 15. მომხმარებელს შემოატანინე ორი რიცხვი და შეამოწმე, ორივე დადებითია თუ არა.

// const userInput = Number(prompt("Enter your number"))

// if(userInput === true){
//     console.log("არის True")
// } else {
//     console.log("არის False")
// }


// 16. მომხმარებელს შემოატანინე ორი რიცხვი და შეამოწმე, მაინც ერთი უარყოფითია თუ არა.

// const userInput = Number(prompt("Enter your number"))
// const userInput2 = Number(prompt("Enter your number"))

// if(userInput || userInput2 === false){
//     console.log(false)
// } else {
//     console.log(true)
// }


// 17. მომხმარებელს შემოატანინე რიცხვი და შეამოწმე, არის თუ არა ის 20–30 შუალედში და ლუწი.

// const userInput = Number(prompt("Enter your number"))

// if(userInput > 20 || userInput < 30, userInput % 2 === 0){
//     console.log("ლუწია")
// } else {
//     console.log("არვიცი ერორია ალბათ")
// }

// 18. მომხმარებელს შემოატანინე რიცხვი და შეამოწმე, არის თუ არა ის 0–10 შუალედში ან 90–100 შუალედში.

// const userInput = Number(prompt("Enter your number"))

// if(userInput > 0 && userInput < 10 || userInput > 90 && userInput < 100) {
//     console.log("correct")
// } else{
//     console.log("ERROR")
// }

// 19. მომხმარებელს შემოატანინე პაროლი და შეამოწმე, ტოლია თუ არა "12345"-ს ან "Goa"-ს.

// const passwordUser = prompt("Enter password")
// if(passwordUser === "12345" || "GOA"){
//     console.log("CORRECT, Register succses")
// } else{
//     console.log("WRONG, Register error")
// }


// 20. მომხმარებელს შემოატანინე რიცხვი და შეამოწმე, არის თუ არა ის 5-ის ჯერადი და არა 10-ის ჯერადი.

// const userInput = Number(prompt("Enter your number"))

// if(userInput % 5 === 0 && userInput % !10) {
//     console.log("correct")
// } else{
//     console.log("ERROR")
// }

// 21. მომხმარებელს შემოატანინე წელი და შეამოწმე, არის თუ არა ის ნაკიანწლიანი (იყოფა 4-ზე და არა 100-ზე, ან იყოფა 400-ზე).

// const userInput = Number(prompt("Enter your number"))

// if(userInput % 4 === 0 && !100 || userInput % 400 === 0) {
//     console.log("ნაკიანწლიანი")
// } else {
//     console.log("NO")
// }

// 22. მომხმარებელს შემოატანინე ორი რიცხვი და შეამოწმე, ორივე დადებითია თუ არა და მათი ჯამი მეტია 100-ზე.

// const userInput = Number(prompt("Enter your number"))

// if(userInput === true && userInput > 100) {
//     console.log("CORRECT")
// } else {
//     console.log("WRONG")
// }

// 23. ამჯერად უკვე ლოგიკური ოპერატორების გამოყენებით გააკეთეთ, მომხმარებელს შემოატანინეთ რიცხვი და გამოიტანეთ შესაბამისი თვე და სეზონი.

// const year = Number(prompt("Enter year"))
// const seazon = prompt("Enter seazon")
// const month = prompt("Enter month")

// if(year && seazon && month === true) {
//     console.log("Year", year, "Seazon", seazon, "Month", month)
// } else {
//     console.log("ERROR")
// }