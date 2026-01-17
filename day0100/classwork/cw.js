// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let result = num.toString().split('');
  num = result[0];
    if (result.length != 1) {
      for (i = 1; i < result.length; i++) {
        num *= result[i];
        }
          return num + 1;
        } 
    else {
      return 0;
    }
}