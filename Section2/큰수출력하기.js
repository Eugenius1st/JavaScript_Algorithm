function solution(n, arr) {
  let answer = [];
  for (let x of arr) {
    if (x >= n) answer.push(x);
  }
  return answer;
}

console.log(solution2([7, 3, 9, 5, 6, 12]));

function solution2(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let x = 0; x < arr.length; x++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}
