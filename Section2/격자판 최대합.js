// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let row = 0; //가로
  let col = 0; // 세로
  let cross = 0; // 대각선
  let revCross = 0; // 역 대각선
  for (let i = 0; i < arr.length; i++) {
    row = 0; //가로
    col = 0; // 세로
    for (let j = 0; j < arr.length; j++) {
      // 가로
      row += arr[i][j];
      // 세로
      col += arr[j][i];
    }
    // 대각선1
    cross += arr[i][i];
    // 대각선2
    revCross += arr[i][arr.length - i - 1];
    answer = Math.max(row, col, cross, revCross);
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution2(arr));

// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력
function solution2(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    sum1 = sum2 = 0;
    answer = Math.max(sum1, sum2, answer);
  }
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[arr.length - i - 1][i];
  }
  answer = Math.max(sum1, sum2, answer);
  return answer;
}
