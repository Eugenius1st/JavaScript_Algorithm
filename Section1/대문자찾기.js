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

//아스키코드로 풀기
function solution2(str) {
  let answer = 0;
  for (let x of str) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
    // 아스키 코드로 바꿔주는 함수
    // 외워라! 대문자: 65~90, 소문자: 97~122
  }
  return answer;
}
