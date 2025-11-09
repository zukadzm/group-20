// 1)while loop ის დახმარებით გამოიტანეთ რიცხვები 0 იდან 10 მდე კონსოლში.

let i = 0;

while(i < 10){
    console.log(i);
    i++
}

// 2)while loop ის დახმარებით გამოიტანეთ თქვენი სახელი 20 ჯერ კონსოლში

let i2 = 0;

while(i2 < 10){
    console.log("ზუკა");
    i2++
}

// 3)დაატრიალეთ while loop 1 იდან 20 მდე და გამოიტანეთ კონსოლში ყველა ლუწი რიცხვი(გამოიყენეთ if else)

let i3 = 0;

while(i3 < 20){
    if(i3 % 2 === 0) {
        console.log(i3)
    }
    i++
}

// 4)შექმენი 4 სია ,ერთ სიაში შეინახეთ სულ სტრინგები,მერე სიაში შეინახე სულ ინტეჯერები,მესამე სიაში შეინახეთ სულ float ები,და მეოთხე სიაში შეინახეთ სულ boolean ები,ასევე შექმენი ბოლოს მეხთე სია სადაც შეინახავ ოთხივე ტიპის მონაცემს ერთად

let strListn = ["STRING","STRING1","STRING2"]

let intListn = [1, 2, 3, 4]

let floatListn = [1.5, 1.7, 1.9, 2.0]

let booleanListn = [true ,false]

let allTypeListn = ["STRING", 1, 1.5, true]

// 5)შექმენი სია სადაც შეინახავ ორ სტრინგს ორ ნამბერს და კიდევ ერთ სიას,სადაც მოათავსებ მხოლოდ სტრინგებს

let listn = ["STRING", "STRING1", 1, 2]
let listn2 = ["STRING2","STRING3","STRING4","STRING5"]