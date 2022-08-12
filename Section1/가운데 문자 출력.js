function solution(str) {
  if (str.length % 2 === 0) {
    return str[str.length / 2 - 1] + str[str.length / 2];
  }
  return str[Math.ceil(str.length / 2) - 1];
}

console.log(solution("good"));
console.log(solution("study"));
