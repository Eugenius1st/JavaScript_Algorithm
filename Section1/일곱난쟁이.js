function solution(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        arr.splice(i, 1);
        arr.splice(j - 1, 1);
        return arr;
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));

// 선생님 코드
// 이중 for문으로 9개 숫자 중 2개를 뽑아서 일일히 확인한다
// sum - (arr[i]+arr[j]) === 100
function solution2(arr) {
  let answer = arr; //얕은 복사
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        //뒤의 값을 먼저 지우면 당겨저도 괜찮다.
      }
    }
  }
  return answer;
}
