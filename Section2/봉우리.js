// 상하좌우 숫자보다 큰 숫자는 봉우리 지역
function solution(arr) {
  const arrLen = arr.length + 2;
  let answer = 0;
  let isTop = true;
  dx = [-1, 0, 1, 0];
  dy = [0, 1, 0, -1];
  arr.unshift(Array.from({ length: arrLen }, () => 0));
  arr.push(Array.from({ length: arrLen }, () => 0));

  for (let i = 1; i < arrLen - 1; i++) {
    arr[i].push(0);
    arr[i].unshift(0);
    for (let j = 1; j < arrLen - 1; j++) {
      // console.log(arr[i][j]);
      for (let k = 0; k < 4; k++) {
        if (arr[i][j] < arr[i + dy[k]][j + dx[k]]) isTop = false;
      }
      isTop ? answer++ : null;
      isTop = true;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution2(arr));

function solution2(arr) {
  const arrLen = arr.length + 2;
  let answer = 0;
  let n = arr.length;
  let flag = 1;
  dx = [-1, 0, 1, 0];
  dy = [0, 1, 0, -1];
  arr.unshift(Array.from({ length: arrLen }, () => 0));
  arr.push(Array.from({ length: arrLen }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dx[k];
        if (nx >= 0 && ny <= 0 && arr[nx][ny] >= arr[i][j]) {
          // nx 와 ny 가 음수일 경우를 대비하여 조건을 추가해주면 된다!
          // 어차피 인 경우는 비교하지 않아도 true 이므로
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}
