// 1) https://www.codewars.com/kata/5b853229cfde412a470000d0/solutions/javascript

function twiceAsOld(a, b) {
  return a>2*b ? a-2*b : 2*b-a;
}

// 2) https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function(busStops){
	var result = 0;
  for (var i=0; i<busStops.length; i++) {
  	result += busStops[i][0];
    result -= busStops[i][1];
  }
  return result;
}