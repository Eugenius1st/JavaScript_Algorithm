function solution(arr) {
  //return Math.min.apply(null, arr);
  let answer = Number.MAX_SAFE_INTEGER; // 최대 값
  for (let i = 0; i < arr.length; i++) {
    if (answer > arr[i]) answer = arr[i];
  }
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
