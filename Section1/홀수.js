function solution(arr) {
  let arrSum;
  let arrMin;
  arr = arr.filter((el) => el % 2 === 1);
  arrSum = arr.reduce((acc, cur) => acc + cur);
  arrMin = Math.min.apply(null, arr);
  return [arrSum, arrMin];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
