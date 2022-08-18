function solution(arr) {
  let answer = 0;
  let acc = 0;
  for (let x of arr) {
    if (x === 0) {
      acc = 0;
    } else {
      acc += x;
      answer += acc;
    }
  }
  return answer;
}

console.log(solution2([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

function solution2(arr) {
  let answer = 0;
  let cnt = 0;
  for (let x of arr) {
  }
  if ((x = 1)) {
    cnt++;
    answer += cnt;
  } else cnt = 0;
  return answer;
}
