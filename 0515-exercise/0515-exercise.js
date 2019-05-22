// if
function evenOrOdd (num) {
  if (num > 1 && num % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

console.log(evenOrOdd(2)); 
console.log(evenOrOdd(3));
console.log(evenOrOdd(1000));

// 3항 연산자
function evenOrOdd (num) {
  let result = num > 1 && num % 2 === 0 ? 'Even' : 'Odd';
  return result;
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(1000));


// 2번 문제
function getCount8 () {
  let str = '';
  let sum = 0;

  for (let i = 0; i < 10001; i++) {
    str += i;
  }

  //  console.log(str);

  for (let j = 1; j < str.length; j++) {
    if (str[j] === '8') ++sum;
  }

  return sum;
}

console.log(getCount8());


// 3번 문제
function alphaString46 (s) {
  if (s !== undefined) {
    if (s.length > 3 && s.length < 7 && !isNaN(s)) {
      return true;
    }
  }
  return false;
}


console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false