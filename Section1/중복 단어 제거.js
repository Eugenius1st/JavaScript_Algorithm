function solution(str) {
  let answer = [];
  for (let i of str) {
    if (!answer.includes(i)) {
      answer.push(i);
    }
  }
  return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
