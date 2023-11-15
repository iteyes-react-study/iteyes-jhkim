
# ✏**2. 자바스크립트 응용**
챕터별 실습 소스는 실습폴더 내부 js 파일을 통해 확인할 수 있습니다. 

---
**2장에서 다룰 내용**
1. ️Truthy & Falsy
2. 삼항 연산자
3. 단락회로 평가
4. 조건문 업그레이드
5. 비 구조화 할당
6. Spread 연산자
7. 동기 & 비동기
8. Promise - 콜백 지옥에서 탈출하기
9. async & wait - 직관적인 비 동기 처리 코드 작성하기
10.  API 호출하기
---
**1️.Truthy & Falsy?** </br>
*JavaScript*에서 참 같은 값(Truthy)인 값이란 불리언을 기대하는 문맥에서 true로 평가되는 값이고 반대로
거짓 같은 값(Falsy)란 Boolean을 기대하는 문맥에서 거짓으로 평가되는 값

**✔ 참 같은 값**
``` javascript
if (true)  
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

**✔ 거짓 같은 값**
```javascript
let value ; // 선언만 하는 경우 undefined 할당 
let undefinedValue = undefined // 위와 같은 값이 할당
let nullValue = null;
let boolValue = false;

let zero = 0;
let notNumber = NaN;

let emptyStr = '';
let emptyStr = "";
```
자바스크립트가 위와 같은 형식의 데이터를 true / false로 판단하는 이유는 조건문 및 논리 연산에서 간편한 사용을 하기 위함, 이를 활용하면 간결한 코드 작성이 가능

**🔨활용 예제**
```javascript
let b = [];  // 빈 배열
if(b)  {
	console.log("TRUE");   // "TRUE" 출력
} else {
	console.log("FALSE");
}

let a = "";
if(a)  {
    console.log("TRUE");
} else {
    console.log("FALSE");  // "FALSE" 출력
}
```
위처럼 참 같은 값과 거짓 같은 값을 조건문 사용 시 boolean 형식의 데이터로 처리 할 수 있음
<br></br>
**정리**
- 조건문 작성 시 Truthy와 Falsy 개념을 이해하고 활용한다면 에러 방지를 하며 코드를 간결하게 작성할 수 있음

---
**2️.삼항 연산자?** </br>
*삼항 연산자*는 JavaScript에서 조건문을 간결하게 처리할 수 있는 테크닉 중 하나, 앞에서부터 조건문, 물음표(?), 참일 경우 실행하는 로직, 
:(콜론), 조건문이 거짓일 경우 실행할 표현식이 배치됨. 이를 활용하면 간단한 ```if.. else```문을 더욱 간결하게 표현할 수 있음

**기본 문법**
```
condition(조건식) ? exprIfTrue(참일때 실행하는 로직) : exprIfFalse(거짓일때 실행하는 로직);
```
문법은 크게 복잡하지 않으며 물음표(?) 와 콜론(:) 의 위치만 잘 잡아주면 편리하게 사용할 수 있음

**🔨활용 예제**
```javascript
let age = 30;
let birthDayMessage = (age > 30) ? "생신 축하드립니다!" : "생일 축하해요!";

// 삼항연산자를 모른다면
let birthDayMessage;
if(age > 30){
    birthDayMessage = "생신 축하드립니다!";
} else {
    birthDayMessage = "생일 축하해요!";
}
```
위 코드에서 ```if/else``` 구문을 삼항연산자를 활용하면 위처럼 한줄에 처리할 수 있음, 하지만 많은 중첩이 필요한 로직이라면 아래 코드를 보며 생각해볼 필요가 있음
```javascript
// 삼항연산자 사용 중첩코드
function makeMessage(age){
    return age >= 60 ? "어르신 생신 축하드려요!" 
        :  age >= 50 ? "생신 축하드려요!"
        :  age >= 40 ? "..."  : "else 구문";
}

// 기존 if-else
function makeMessage(age){
    if(age >= 60) {return "어르신 생신 축하드려요!"}
    else if(age >= 50) { return "생신 축하드려요!"}
    else if(age >= 40) { return "..."}
}
```
위 두 함수는 동일한 메시지를 리턴하는 함수이지만 기존 ```if-else``` 가 더 직관적
<br></br>
**정리**
- 사실 삼항연산자를 몰라도 ```if-else``` 구문으로 처리할 수 있음, 하지만 이를 잘 활용한다면 코드를 더 간결하게 사용할 수 있음
- 복잡한 로직의 조건문이라면 삼항 연산자도 중첩으로 사용해 이를 표현할 수 있지만 개인적으로 이는 기존 ```if-else``` 코드보다 가독성이 떨어지므로 기존 조건문을 사용
---

**3.단락회로 평가** </br>
 단락회로 평가는 왼쪽에서 오른쪽에서 연산하게 되는 논리연산자의 연산 순서를 이용하는 문법
```javascript
console.log(false && true); // && 연산자는 왼쪽 오른 값이 모두 참일때 true를 리턴, 만약 왼쪽 값이 false라면 오른쪽 true를 확인하지 않음
console.log(ture || false); // || or 연산자는 두 값중 하나라도 true라면 true를 리턴, 역시 왼쪽 값이 true라면 오른쪽 false를 확인하지 않음
```
위와 같이 논리연산자의 두번째 피연산자를 확인하지 않고 연산을 끝내는것을 **단락회로 평가**라 함

**🔨활용 예제**</br>
단락회로 평가를 활용해 아래와 같이 코드를 작성할 수 있다.
**
```javascript
const getName = (person) => {
	const name = person && person.name;
	return name || "객체가 아닙니다.";
}

let person ; // "객체가 아닙니다.";  or {name : "김준현"}; // 두 케이스 모두 처리 가능
const name = getName(person);
console.log(person); // "객체가 아닙니다." or "김준현"
```
단락회로 평가를 사용하지 않으면 위 코드에 person의 값에 undefined가 할당된다면 person.name에 접근 시 에러가 발생함 </br> 
하지만 && 단락회로 평가와 truthy & falsy 속성을 활용하면 위 코드는 아래와 같은 순서로 동작 
1. person의 값은 undefined(falsy) 속성을 갖게 되어 name의 값엔 undefined가 할당
2. return 문에선 || 연산자로 인해 뒷 문자열인 "객체가 아닙니다." 가 리턴(truthy 속성)  
3. 최종 "객체가 아닙니다"가 출력
   <br></br>
**정리**
- 단락회로 평가는 논리연산자의 연산 순서(왼쪽에서 오른쪽으로 연산)를 이요하는 문법
- 단락회로 평가를 활용해 데이터의 비정상적인 값을 생각하며 코드를 작성할 수 있음
---
**4️.조건문 업그레이드** </br>
조건문을 응용해서 사용할 수 있는 테크닉에 대한 내용

**🔨활용 예제**</br>
```javascript
function isKoreanFood(food){
		if(food === "불고기" || food === "비빔밥" || food ==="떡볶이"){
 			 return true;
		} 
		return false;
}

// 상단(적용전), 하단(적용후)
// 위와 동일한 로직의 코드
function isKoreanFood(food){
		if(["불고기","떡볶이","비빔밥"].includes(food)){
 			 return true;
		} 
		return false;
}
```
배열의 includes 내장 함수를 활용해 if || if 를 직관적으로 개선해 사용

```javascript
const meal = {
	한식 : "불고기",
	중식 : "멘보샤",
  일식 : "초밥",
  양식 : "스테이크",
  인도식 : "카레"
};
const getMeal =(mealType) => {
		return meal[mealType]  || "굶기"
}

console.log(getMeal("한식")); // "불고기";
console.log(getMeal("미국식")); // "굶기";
```
meal 객체를 활용해 if문을 더욱 간결하게 표현할 수 있음
<br></br>
**정리**
- 배열을 활용하는 방식과 객체를 활용해 if문을 간결하게 사용하는 방식 지향
---
**5.비구조화 할당**
배열이나 객체를 더 효과적으로 사용할 수 있는 테크닉

**🔨활용 예제**

**✔변수 비구조화 적용 전**
```javascript
let arr =["one","two","three"];

let one = arr[0];
let two = arr[1];
let three =arr[2];
console.log(one,two,three);
```
일반적으로 배열의 내부 값을 변수에 할당하기 위해선 위와 같은 코드를 작성한다. 하지만 비구조화 할당 개념을 적용하면 한줄의 코드로 끝낼 수 있음, 아래 코드는 동일한 코드

**✔변수 비구조화 적용 후**
```javascript
let arr =["one","two","three"];
let [one,two,three] = arr;
console.log(one,two,three) // one two three 출력

// 기본값 추가 방식
let [one,two,three,four = "four"] = ["one","two","three"]; // four ="four" 형식을 이용해 기본값을 줄 수도 있음
console.log(one,two,three,four); // one,two,three,four 출력 , 
```
대괄호를 이용해서 배열의 값을 순서대로 할당받아 사용하는 방식을 **배열의 비구조화 할당**이라 함

<br></br>
이를 활용해 값의 위치를 바꾸는 Swap도 간단하게 할 수 있음
```javascript
let a = 10;
let b = 20;
[a,b] = [b,a]; 
```
한줄로 a,b 변수의 값이 Swap된다. <br>
동작 순서는 비구조화 할당으로 b의 값(20)과 a의 값(10)이 a,b 변수에 할당

<br></br>
비구조화 할당을 이용해 객체의 값에도 할당할 수 있음 <br>
**✔객체 값에 비구조화 적용 전**
```javascript
let object = {one: "one", two:"two", three:"three"};
let one = object.one;
let two = object.two;
let three = object.three;
```

**✔객체 비구조화 적용 후**
```javascript
let object = {one: "one", two:"two", three:"three"};
let {one, two, three} = object;
console.log(one,two,three);
```
오브젝트의 키값을 기준으로 one의 키값의 프로퍼티 값을 각각의 변수에 할당(순서가 아닌 키값을 기준으로 비구조화 할당 발생)
<br></br>
**정리**
- 비구조화는 배열 또는 객체의 값을 편리하게 할당하는 기술
- 비구조화 할당은 앞으로 리액트에서 매우 자주 사용하게 될 개념임

---
**6.Spread 연산자** </br>
객체를 다루는 다른 방법인 **Spread 연산자** </br>
**🔨활용 예제**</br>
```javascript
const cookie = {
    base : "cookie",
    madeIn : "korea"
};

const chochochipCookie = {
    base : "cookie",
    madeIn : "korea",
    toping : "chocochip"
};

const blueberryCookie = {
     base : "cookie",
     madeIn : "korea",
     toping : "blueberry" 
}
```
위 객체들은 중복된 키와 프로퍼티인 `base : "cookie", madeIn:"korea"` 정보가 모든 객체마다 들어가 있는데 이를 효과적으로 처리할 수 있는 스킬이 Spread 연산자

**✔Spread 적용 코드**
```javascript
const cookie = {
    base : "cookie",
    madeIn : "korea"
};

const chochochipCookie = {
    ...cookie,
    toping : "chocochip"
};

const blueberryCookie = {
    ...cookie, 
    toping : "blueberry" 
}
```
`...cookie` 를 Spread 연산자라 하며 이를 이용하면 중복된 객체의 요소를 편리하게 추가할 수 있음

<br></br>

이를 이용해 다음과 같이 또 다른 방식으로 유용하게 사용할 수 있음
```javascript
const noTopingCookies =["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키","블루베리쿠키","딸기쿠키"];
const allCookies = [...noTopingCookies,...topingCookies]; // 출력 [ '촉촉한쿠키', '안촉촉한쿠키', '바나나쿠키', '블루베리쿠키', '딸기쿠키' ]

```
Spread 연산자를 이용하면 객체의 프로퍼티를 펼치는 것처럼 배열의 원소를 순서대로 펼칠 수 있음 
<br></br>
**정리**
- Spread 연산자를 활용하면 중복된 객체의 요소를 편리하게 처리할 수 있음
- Spread 연산자 뿐만 아니라 중간에 실제 프로퍼티 값을 사용할 수 있음
