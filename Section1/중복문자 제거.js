function solution(str) {
  let answer = new Set(str);
  return Array.from(answer).join("");
  //Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
}

console.log(solution3("ksckscetk"));

//indexOf를 알아보자
function solution2(str) {
  let answer = "";
  // console.log(str.indexOf("k")); // 만약 ('k',3) 이면 3번 인덱스부터 k를 찾아라는 의미이다.
  // 발견하지 못하면 -1을 반환한다.
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
    // k 값을 가진 index가 최초의 값과 같다면 answer에 더한다
  }
  return answer;
}

// tmi
// 특정 문자 개수 찾기
function solution3(str) {
  let answer = "";
  let pos = str.indexOf("k");
  while (pos !== -1) {
    answer++;
    pos = str.indexOf("k", pos + 1); //이전값 뒷편부터 찾아라
    console.log(pos);
  }
  return answer;
}
