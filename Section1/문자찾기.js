function solution(str, chr) {
  let answer = 0;
  for (let i of str) {
    if (i === chr) answer += 1;
  }
  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
