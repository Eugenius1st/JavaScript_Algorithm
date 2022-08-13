function solution(arr) {
  let answer = [];
  for (let i of arr) {
    if (!answer.includes(i)) {
      answer.push(i);
    }
  }
  return answer;
}

let arr = ["good", "time", "good", "time", "student"];
console.log(solution2(arr));

//indexOf활용하여 풀기
function solution2(arr) {
  let answer;
  answer = arr.filter(function (v, i) {
    //v는 value 값들, i는 index들
    if (arr.indexOf(v) === i) return true;
  });
  //참을 return 한 str값의 value를 return 한다
  return answer;
}
