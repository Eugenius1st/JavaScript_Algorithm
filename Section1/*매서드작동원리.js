// 고차함수
// forEach, map, reduce, filter 작동원리

//forEach
//반복문 대신 사용한다.
function forEach(predicate, thisArgs) {
  for (let i = 0; i < a.length; i++) {
    predicate(a[i], i);
  }
}
a = [10, 11, 12, 13, 14, 15];
a.forEach(function (v, i) {
  console.log(v, i);
});
// 인자로 콜백함수를 넣는다.
//콜백함수 내부의 v는 배열의 값, 두번째는 인덱스 번호이다.

//map
function map(predicate, thisArgs) {
  let list = [];
  for (let i = 0; i < a.length; i++) {
    list.push(predicate(a[i], i));
  }
  return list;
}

a = [10, 11, 12, 13, 14, 15];
let answer = a.map(
  function (v, i) {
    if (v % 2 == 0) return v;
  },
  [1, 2]
);
// 새로운 배열 생성 하지만, 길이는 원본 배열과 같다.
// undefined로 채워져있다.

//filter

function filter(predicate, thisArgs) {
  let list = [];
  for (let i = 0; i < a.length; i++) {
    if (predicate(a[i], i)) list.push(a[i]);
    //predicate가 참일 경우에 추출
  }
  return list;
}

a = [10, 11, 12, 13, 14, 15];
answer = a.filter(
  function (v, i) {
    return v % 2 == 1; //참인 것 return(map과 다르게 특정 값 return)
    //따라서 원본 배열과 길이가 다르다.
  },
  [1, 2]
);

//reduce

function reduce(predicate, val) {
  let result = val;
  //아래에서는 처음으로 0이 넘어왔으므로 초기화는 0
  for (let i = 0; i < a.length; i++) {
    result = predicate(result, a[i]);
    //predicate 라는 콜백함수 인자에 원본값 v 넘김
    // 그리고 그 return 결과가 result에 담김 ... 계속 누적
  }
  return result;
}

a = [10, 11, 12, 13, 14, 15];
answer = a.reduce(function (acc, v) {
  return acc + v; //reduce 는 map 과 filter와 다르게 배열이 아니라 값을 return 한다.
  //acc 는 누적 값이고, v는 현재 요소이다.
}, 0);
//초기값 정의 안해주면 첫번째 값이 들어간다
