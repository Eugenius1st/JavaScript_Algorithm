function solution(arr) {
  let arrSum;
  let arrMin;
  arr = arr.filter((el) => el % 2 === 1);
  arrSum = arr.reduce((acc, cur) => acc + cur);
  arrMin = Math.min.apply(null, arr);
  return [arrSum, arrMin];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));

//선생님 코드
function solution2(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
