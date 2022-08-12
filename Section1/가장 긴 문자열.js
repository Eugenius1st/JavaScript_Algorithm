function solution(str) {
  let idx;
  let letArr = str.map((el) => el.length);
  let maxAns = Math.max.apply(null, letArr);
  idx = letArr.indexOf(maxAns);
  return str[idx];
}

let str = ["teacher", "time", "student", "beautiful", "gooooooood"];
console.log(solution(str));
