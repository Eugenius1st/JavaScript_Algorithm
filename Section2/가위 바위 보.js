function solution(a, b) {
  // 1:가위, 2:바위, 3:보
  let answer = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] === 3 && b[i] === 1) {
      answer.push("B");
    } else if (a[i] === 1 && b[i] === 3) {
      answer.push("A");
    } else if (a[i] === b[i]) {
      answer.push("D");
    } else {
      a[i] > b[i] ? answer.push("A") : answer.push("B");
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
