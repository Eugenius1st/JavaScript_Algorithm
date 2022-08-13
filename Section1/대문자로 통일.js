function solution(str) {
  return str.toUpperCase();
}

console.log(solution2("ItisTimeToStudy"));

//선생님 코드, 아스키코드로 풀기

function solution2(str) {
  let answer = "";
  for (let x of str) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    // String.fromCharCode 는 숫자를 아스키코드로 바꿔줌
    else answer += x;
  }
  return answer;
}
