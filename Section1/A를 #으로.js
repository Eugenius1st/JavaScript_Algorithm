function solution(str) {
  let answer = "";
  for (let i of str) {
    if (i === "A") answer += "#";
    else answer += i;
  }
  return answer;
}

console.log(solution("BANANA"));

// 선생님 코드
function solution2(str) {
  let answer = str;
  answer = str.replace(/A/g, "#");
  //replace 라는 메서드는 특정 값을 대체된다.
  // g를 사용하면 전체의 string 을 바꾼다.(g를 넣어주지 않으면 값 하나만 대체된다.)
  return answer;
}
