// 1) https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
  return (year + 99) / 100 | 0;
}

// 2) https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

// 3) https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
  return i+i;
}

// 4) https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

// 5) https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
  for(let i=0; i<array.length; i++){
    array[i] *= -1;
  }
   return array;
}

// 6) https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}

// 7) https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

const getCount =(str)=> {
  let vowelsCount = 0;
  
  // enter your majic here
  for(letter of str){
  if(letter === 'a'){
    vowelsCount +=1;
  }else if(letter === 'e'){
    vowelsCount +=1;
  }else if(letter === 'i'){
    vowelsCount +=1;
  }else if(letter === 'o'){
    vowelsCount +=1;
  }else if(letter === 'u'){
    vowelsCount +=1;
  }
  }
  
  return vowelsCount;
}

// 8) https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  const toArr = Array.from(String(n), Number).reverse();
  return toArr;
}

// 9) https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){
  return str.endsWith(ending);
}