// 삼각형 출력하기 - pattern 2
// 실패
for (let i = 0; i < 5; i++) {
  let asterisk = '';
  for (let j = 5; j > i + 1; j--) {
    if (i + j < 5) {
      asterisk += '\n';
    } else {
      asterisk += '*';
    }
  }
  console.log(asterisk);
}
