// მოცემული გაქვთ სია:  [100, 50, 0, -300, 150, 20, 40, 900] და გამოიტანეთ ყველაზე პატარა რიცხვი. (მთლიანი სია შეამოწმეთ და ისე, ხელით არ ამოარჩიოთ).


let listn = [100, 50, 0, -300, 150, 20, 40, 900]

let min = listn[0]

for(let i = 1; i < listn.length; i++) {
    if(listn[i] < min) {
        min = listn[i]
    }
}

console.log(min)


// მოცემული გაქვთ სია: ['01001011100', '100111110', '110101010']. ამ სიის თითოეული ელემენტი არის ორობით სისტემაში. გადაიყვანეთ ათობითში და ჩაამატეთ ახალ სიაში.

let listn2 = ['01001011100', '100111110', '110101010']

let result = []
for(let i = 0; i < listn2.length; i++) {
    let num = 0;
    for(let j = 0; j < listn2[i].length; j++) {
        num = num * 2 + Number[listn2[i][j]]
    }
    result.push(num)
}

console.log(result)

// მომხმარებელს შემოატანინეთ რიცხვი. და ამ რიცხვის გამყოფები გამოიტანეთ სიის სახით.

let user = Number(prompt("Enter number: "))
let result2 = []

for(let i = 1; i <= user; i++) {
    if(n % i === 0) {
        result2.push(i)
    }
}

console.log(result2)

// შექმენით სია, სადაც ეწერა ამ ჯგუფის მოსწავლეების სახელები.  დააჯგუფეთ ლუწ ინდექსზე მდგომი სახელები ცალკე და კენტ ინდექსზე მდგომი სახელები ცალკე.

let group = ["Gio", "Zuka", "Nika", "Sandro", "Luka", "Nodo", "Vaxo"]

let luwi = []
let kenti = []

for(let i = 0; i < group.length; i++) {
    if(i % 2 === 0) {
        luwi.push(group[i])
    } else {
        kenti.push(group[i])
    }
}

// შექმენით მინიმუმ 5 ელემენტიანი სია, რიცხვებიც იყოს და სტრინგებიც. ამ სიას გადაუარეთ და ყველა რიცხვი გადაამრავლეთ ერთმანეთზე.

let listn4 = [20, "Hello", 5, "Zuka", 10, "Random"]
let result3 = 1;

for(let i = 0; i < listn4.length; i++) {
    if(listn4[i] === listn4[i] + 0) {
        result3 = result3 * listn4[i]
    }
}

console.log(result3)