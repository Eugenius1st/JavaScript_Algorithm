function solution(arr) {
  let answer = 0;
  let maxN = Number.MIN_SAFE_INTEGER;
  for (let x in arr) {
    if (x > maxN) {
      maxN = x;
      answer++;
    }
  }
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
