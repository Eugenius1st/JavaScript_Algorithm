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

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
