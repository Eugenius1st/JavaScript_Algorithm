function solution(str) {
  let answer = new Set(str);
  return Array.from(answer).join("");
  //Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
}

console.log(solution("ksekkset"));
