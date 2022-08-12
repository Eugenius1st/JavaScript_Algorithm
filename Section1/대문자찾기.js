function solution(str) {
  let answer = 0;
  for (let i of str) {
    if (i.toUpperCase() === i) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution("KoreaTimeGood"));
