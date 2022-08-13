function solution(str) {
  let idx;
  let letArr = str.map((el) => el.length);
  let maxAns = Math.max.apply(null, letArr);
  idx = letArr.indexOf(maxAns);
  return str[idx];
}

let str = ["teacher", "time", "student", "beautiful", "gooooooood"];
console.log(solution2(str));

function solution2(str) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of str) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
