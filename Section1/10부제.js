function solution(n, arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (n === arr[i] % 10) {
      answer += 1;
    }
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

// 선생님 코드
function solution2(n, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++;
  }
  return answer;
}
