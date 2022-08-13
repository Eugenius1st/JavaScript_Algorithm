function solution(str) {
  if (str.length % 2 === 0) {
    return str[str.length / 2 - 1] + str[str.length / 2];
  }
  return str[Math.ceil(str.length / 2) - 1];
}

console.log(solution3("good"));
console.log(solution3("study"));

// ceil 쓰는 것 보다 floor 쓰는게 깔끔하구나..
function solution2(str) {
  let answer;
  let mid = Math.floor(str.length / 2); //나눈 값의 몫
  if (str.length % 2 === 1) answer = str.substring(mid, mid + 1);
  else answer = str.substring(mid - 1, mid + 1);
  //substring 은 첫 인자~마지막 인자를return 한다
  return answer;
}

function solution3(str) {
  let answer;
  let mid = Math.floor(str.length / 2); //나눈 값의 몫
  if (str.length % 2 === 1) answer = str.substr(mid, 1);
  else answer = str.substr(mid - 1, 2);
  //substr 은 첫 인자~+ 뒤의 인덱스 번호 값까지 return 한다
  return answer;
}

// substring 과 substr 정리 잘 해놓자 !!
