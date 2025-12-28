// 1) https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascrip0t

function booleanToString(b){
  return b.toString();
}

// 2) https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x){
  let result = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 0 : result += 1;
  }
  return result;
}

// 3) https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript

function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}

// 4) https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript

function add(a, b){
	return a == b 
}

// 5) https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str){
  return str.split('').reverse().join('');  
}


// 6) https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  return str.replace(/[aeiouAEUIOU]/g, '');
}

// 7) https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

// 8) https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}