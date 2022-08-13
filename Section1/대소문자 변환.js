function solution(str) {
  let answer = "";
  for (let i of str) {
    if (i === i.toUpperCase()) {
      answer += i.toLowerCase();
    } else {
      answer += i.toUpperCase();
    }
  }
  return answer;
}

console.log(solution2("StuDY"));

function solution2(str) {
  let answer = "";
  for (let x of str) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) {
      answer += String.fromCharCode(num - 32);
    } else {
      answer += String.fromCharCode(num + 32);
    }
  }
  return answer;
}
