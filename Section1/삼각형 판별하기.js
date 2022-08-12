function solution(a, b, c) {
  //삼각형을 만들 수 있는 조건: 삼각형에서 가장 긴 변의 길이는 나머지 두 변의 길이의 합보다 작다.
  let triangle = [a, b, c];
  triangle.sort((a, b) => a - b);
  if (triangle[2] < triangle[0] + triangle[1]) {
    return "YES";
  } else return "NO";
}

console.log(solution(13, 33, 17));
console.log(solution(6, 7, 11));

//선생님 코드
// function solution(a, b, c) {
//     let answer="YES", max;
//     let sum = a + b + c;
//     if(a>b) max = a;
//     else max = b;
//     if(c>max) max = c;
//     if((sum-max)<=max) answer="NO"
//   }
