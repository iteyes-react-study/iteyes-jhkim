let arr =["one","two","three"];
//
// let one = arr[0];
// let two = arr[1];
// let three =arr[2];
//console.log(one,two,three); // one two three

// 위 코드를 구조 분해 할당으로 변환해보겠음
// 아래 코드는 위와 동일함
//let [one,two,three] = ["one","two","three"];
//console.log(one,two,three); // one two three

//let [one,two,three="three"] = ["one","two"];  // 원래라면 three는 undefined
// three -> 기본값 "three" 할당

// let object = {one: "one", two:"two", three:"three"};
// let one = object.one;
// let two = object.two;
// let three = object.three;

let object = {one: "one", two:"two", three:"three",name:"준현"};
//let {one, two, three} = object;

let {name : myName="123", one:oneOne, two, three, abc} = object;
console.log(myName,two,three,three);