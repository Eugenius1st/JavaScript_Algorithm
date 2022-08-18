function solution(arr) {
  // 입력된 순서대로 등수 출력 방법
  // for문으로 이 수보다 클 경우 1씩 카운팅?
  let answer = Array.from({ length: arr.length }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}

console.log(solution2([87, 89, 92, 100, 76]));

function solution2(arr) {
  let answer = Array.from({ length: arr.length }, () => 1);
  // 이중 for문 돌린다.나보다 큰 녀석을 발견하면 ++
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}
