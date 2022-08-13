function solution(str, chr) {
  let answer = 0;
  for (let i of str) {
    if (i === chr) answer += 1;
  }
  return answer;
}

console.log(solution("COMPUTERPROGRAMMINGR", "R"));

function solution2(str, chr) {
  let answer = str.split(chr).length;
  //문자를 기준으로 배열을 나누고 -1 한다.
  //만약 맨 마지막에 chr이 있다면? 그 끝에는 빈 문자열이 생기므로 괜찮다.
  // ROROR 이라면 길이는 3이다 -> R, OR, OR, ""
  return answer;
}
