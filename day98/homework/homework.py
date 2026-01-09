# https://www.codewars.com/kata/581a52d305fe7756720002eb

# function validateNumber(str){
# let result = [];

# for(let i = 0; i <=str.length; i++){
#     if(isFinite(str.split("")[i])) {
#         result.push(str.split("")[i])
# }
# }
# if(result.length == 11 && result[0] == 0 && result[1] == 7 || 
#     result.length == 12 && (result[0] && result[1] == 4) && result[2] ==7){
#          return "In with a chance"
#     }
# else{
#     return "Plenty more fish in the sea"
# }
 
# }

# https://www.codewars.com/kata/5208f99aee097e6552000148

# function solution(string) {
#     return string.replace( /([A-Z])/g , " $1");
# }

# https://www.codewars.com/kata/541c8630095125aba6000c00

# function digital_root(n) {
#   return (n - 1) % 9 + 1;
# }

# https://www.codewars.com/kata/51e0007c1f9378fa810002a9

# function parse(data) {            # Math ვიცი ძველი ჯგუფიდან და რაც უცხო მაქვს გამოყენებული ვიცი ეგენიც ძველი ჯგუფეფიდან
#   let num = 0;
#   let result = [];
#   for(var i = 0; i <= data.length; i++) {
#     if(data[i] === "o") {
#       result.push(num);
#     } else if (data[i] === "i") {
#       num++;
#     } else if(data[i] === "d") {
#       num--;
#     } else if (data[i] === "s") {
#       num = Math.pow(num, 2)
#     }
#   }
#   return result;
# }

# https://www.codewars.com/kata/5526fc09a1bbd946250002dc

# function findOutlier(integers){
#   const even = integers.filter(int => int % 2 === 0);
#   const odd  = integers.filter(int => int % 2 !== 0);
#   return even.length === 1 ? even[0] : odd[0];
# }

# https://www.codewars.com/kata/587731fda577b3d1b0001196

# def camel_case(s):
#     s = s.split()
#     result = ""
#     for i in s:
#         i = i.capitalize()
#         result +=i
#     return result

# https://www.codewars.com/kata/52597aa56021e91c93000cb0

# def move_zeros(lst):
#     for i in lst:
#         if i == 0:
#             lst.remove(i) 
#             lst.append(i) 
#     return lst

# https://www.codewars.com/kata/5264d2b162488dc400000001

# ვერ გავაკეთე ეს