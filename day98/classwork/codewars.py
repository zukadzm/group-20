# https://www.codewars.com/kata/528d9adf0e03778b9e00067e

# function mineLocation(field){
#   for (let i = 0; i < field.length; i++) {
#     for (let j = 0; j < field[i].length; j++) {
#       if (field[i][j] === 1) {
#         return [i, j] 
#       }
#     }
#   }
# }



# https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python


# def is_pangram(s):
#     result = []
#     s = s.lower()
#     for i in s:
#         if i.isalpha():
#             if i not in result:
#                 result.append(i)
#     return len(result) == 26


# https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

# function solution(string) {
#     return string.replace( /([A-Z])/g , " $1");
# }


# https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

# function array_diff(a, b) {

#     let arr = new Array();
    
#     for(var i = 0;i<a.length;i++){
#         if(b.indexOf(a[i])<0){
#             arr.push(a[i]);
#         }
#     }
  
#     return arr;
# }



# https://www.codewars.com/kata/514b92a657cdc65150000006/solutions

# def solution(number):
#     if number < 0:
#         return 0
    
#     sum_multiples = 0
#     for i in range(number):
#         if i % 3 == 0 or i % 5 == 0:
#             sum_multiples += i
    
#     return sum_multiples


# print(solution(10))


# https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

# function vaporcode(string) {
#   let result=[];
#   for (let i=0; i<string.length; ++i)
#     if (string[i]!=' ')
#       result.push(string[i].toUpperCase());
#   return result.join('  ');
# }