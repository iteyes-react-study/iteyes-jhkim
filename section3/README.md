
# ✏**Node js 기초**

[🔭 노드 공식 문서](https://nodejs.org/en/learn)

Node.js 는 오픈 소스 및 크로스 플랫폼 JavaScript 런타임 환경이다.

<br>

## **실행환경**

3챕터부터는 Node.js 설치가 필요하고 VSCode와 Terminal을 사용해 실습

- Node.js(v18.18.2)
    - cmd에서 node -v
    - cmd 환경에서 사용
- Javasciprt 코드 생성 VSCode

<br>

## 목차

3챕터에 다룰 내용은 아래와 같다.

- 설치하기 파트는 생략
1. Node.js란?
2. ~~Node.js & VsCode 설치하기~~
3. Node.js 기초
4. Node.js 패키지 생성 및 외부 패키지 사용하기

---

## 01. Node.js?

Node.js는 오픈 소스 및 크로스 플랫폼 **JavaScript 런타임 환경이다.**

자바스크립트는 원래 브라우저 환경에서만 실행할 수 있다는 한계가 있었는데 쉽고 편리한 자바스크립트 엔진을 독립적으로 실행시키고 싶었고 이를 해결한 프로젝트의 이름이 **Node.js**

: 자바스크립트를 브라우저가 아닌 어디에서도 실행 가능한 런타임 환경이 바로 **Node.js**

: Node.js 의 엔진은 Chrome의 V8 엔진

<br>

**JavaScript 런타임 환경?**

: JavaScript 엔진을 실행하는 곳이며 자바스크립트는 런타임 환경에서만 실행

<br>

**자바스크립트 엔진의 종류**

![자바스크립트 엔진 종류](https://github.com/iteyes-react-study/iteyes-jhkim/blob/main/section3/%20image/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%94%EC%A7%84%EC%A2%85%EB%A5%98.png)

- 브라우저마다 같은 엔진을 쓰는게 아닌 자기들만의 엔진을 사용한다.
- 크롬 브라우저가 가진 **V8**이 가장 자바스크립트의 대표적인 엔진이다.

<br>

**리액트를 배우려는데 Node.js를 왜 배울까?**

결론부터 말하면 리액트는 Node.js를 기반으로 사용할 수 있는 기술이기 때문이다. 

또한 리액트를 사용해서 만든 자바스크립트 파일들로 좋은 기능을 만들 수 있고 이는 Node.js를 기반으로 만들 수 있기 때문에 본 React 강의 이전에 자바스크립트와 Node에 대한 기본 개념이 필수적이다.

<br>

**정리**

- Node.js는 브라우저 환경에서만 실행할 수 있는 자바스크립트의 런타임 환경을 독립시킨 프로젝트의 이름
- 리액트는 Node.js를 기반으로 사용할 수 있는 기술이며 자바스크립트 파일을 바탕으로 좋은 기능을 만들어 주는 프레임워크

---

## 03. Node.js 기초

Node js는 언어가 아닌 자바스크립트를 웹 브라우저가 아닌 독립적인 환경에서 실행시켜주는 도구

VSCODE로 편집한 index.js 파일을 Node로 파일을 실행시키기 위해선 GUI 방식도 가능하지만 NODE 만으로는 실행시킬 수 없으며 일반적으로 터미널 환경에서 CLI 방식을 사용한다. 

<br>

실행 명령어는 `Node [파일명]` 이다

*NODE 실행 결과*

![실행 결과1](https://github.com/iteyes-react-study/iteyes-jhkim/blob/main/section3/%20image/NODE%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC(2).png)

자바스크립트 파일을 Node 환경[= V8 엔진 환경]에서 실행한 결과이다.

<br>

**모듈 분리하기**

자바스크립트도 하나의 파일에 모든 기능을 넣을 수는 없다. 

노드에선 파일을 어떻게 분리해서 외부에서 사용할 수 있는지 보자


*모듈 내보내기*

```
// calc.js 파일
// 계산 기능을 하는 파일
const add = (a,b) => a + b;
const sub = (a,b) => a - b;

module.exports = {
    moduleName : "calc module",
    add : add,
    sub : sub,
};
```

`module.exports`  :  해당 모듈을 외부에서 사용할 수 있게 해주는 노드 함수

<br>

*외부에서 모듈 사용하기*

```jsx
const calc = require("./calc");
console.log(calc);
```

`require` : 외부 모듈을 경로를 파라미터로 넘겨 사용할 수 있게 해주는 노드 함수

`moduel.exports` 그리고 `require` 은 노드의 내장 함수이기 때문에 일반 자바스크립트 코드에선 사용할 수 없다.

<br>

*실행 결과 그림*

![Untitled](https://github.com/iteyes-react-study/iteyes-jhkim/blob/main/section3/%20image/NODE%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC(3).png)

`node [파밀명]` : node 런타임 환경에서 실행시키는 명령어

<br>

**정리**

- 자바스크립트 파일을 Node 환경에서 실행하기 위해선 터미널을 명령어를 사용한다.
- 자바스크립트 파일을 외부에서 사용하기 위해선 노드의 함수 `moduel.exports` 그리고 이를 사용하기 위해선 `require` 명령어를 사용한다.

---

## 04. Node 패키지 생성 및 외부 패키지 사용하기

`npm`: Node Pacakage Manager의 약자

다른 사람이 만들어 놓은 모듈들을 사용하게 해줌

`npm init` : Node.js 프로젝트를 시작할 때 사용하는 명령어로 기본 설정을 초기화 합니다.

`package.json`  : npm init을 통해 설정한 프로젝트의 이름, 설명, 저자, 라이센스 등과 같은 프로젝트의 대한 기본 정보를 보여주는 json 파일이다.

*package.json 파일 예시*

```jsx
{
  "name": "package-example1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js" // npm start -> node index.js 라는 명령어를 대체할 수 있다. 
  },
  "author": "jun-hyeon",
  "license": "ISC",
  "dependencies": {
    "randomcolor": "^0.6.2"
  }
}
```

`scripts` : 자주 사용하는 긴 명령어를 대체할 수 있음

`dependencies` : 어떤 버전의 외부 패키지를 사용했는지 알 수 있음(^의 의미는 명시된 버전 이상의 버전 이상으로만 설치가 진행이 된다는 의미)

<br>

*의존성 추가 방법*

1. [🔗npm.js](https://www.npmjs.com/) 사이트 접속

✅ *npms.js*? 

: 자바스크립트 패키지를 검색하고 설치하며, 프로젝트의 의존성을 관리할 수 있는 사이트

→ 다른 사람이 만들어 놓은 유용한 기능의 모듈을 사용할 수 있다.

<br>

2. 추가하고 싶은 의존성 검색

: 추가하고 싶은 의존성을 검색한다.

<br> 

3. 찾은 모듈을 클릭하면 오른쪽 Install에 명시된 명령어를 입력한다.

`npm i [name]  OR  npm install [nmae]`  : 의존성 설치 명령어

<br> 

*의존성 추가 시 생기는 변화*

1.  `pacekage.json` 파일에 의존성이 추가 된다.

```jsx
"dependencies": {
    "randomcolor": "^0.6.2" // 추가한 의존성 정보
  }
```

`randomcolor` : randomcolor 의존성을 추가했고 ^의 의미는 명시된 버전 이상의 버전 이상으로만 설치가 진행된다는 의미

<br>

2. `package-lock.json`  신규 생성

*package-lock.json 파일 예시*

```jsx
{
  "name": "package-example1",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "package-example1",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "randomcolor": "^0.6.2"
      }
    },
    "node_modules/randomcolor": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/randomcolor/-/randomcolor-0.6.2.tgz",
      "integrity": "sha512-Mn6TbyYpFgwFuQ8KJKqf3bqqY9O1y37/0jgSK/61PUxV4QfIMv0+K2ioq8DfOjkBslcjwSzRfIDEXfzA9aCx7A=="
    }
  }
}
```

`package-json` 파일과 이름이 유사한 파일이지만 차이점을 이해하고 구분하자.

| package.json | package-lock.json |
| --- | --- |
| 프로젝트의 메타데이터와 의존성 정보를 담고 있는 JSON 파일 | package.json에 명시된 의존성 패키지들의 정확한 버전 및 해시값을 기록하는데 사용 |
| 신규 의존성을 설치하면 해당 파일은 업데이트 된다. | 신규 의존성 설치 시 정확한 의존성 버전이 명시된다. |
| 정확한 의존성 버전이나 해시 등은 기록되지 않아, 여러 개발자가 프로젝트를 클론하고 npm install 입력 시, 모두 같은 의존성 버전을 얻을 수는 없다.  | 프로젝트를 공유하거나 배포할 때, package-lock.json 파일을 함께 제공한다면 의존성 버전을 동일하게 유지할 수 있음  |

<br>

3. 신규 의존성 사용 가능

*의존성 사용하기*

```jsx
// npm i 를 통해 다운받은 파일은 따로 경로를 지정해주지 않아도 된다.
const randomColor = require('randomcolor');

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1);
console.log(color2);
console.log(color3);
```

추가한 의존성은 따로 경로를 지정 없이 설치한 의존성 명을 입력해 바로 사용할 수 있음


*출력 결과*

![실행결과4](https://github.com/iteyes-react-study/iteyes-jhkim/blob/main/section3/%20image/NODE%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC(4).png)

`npm start [파일명]` 명령어를 사용해 실행시켰고, 정상 출력된 모습이다.

<br>

**정리**

- npm은 Node.js 패키지 관리, 의존성 관리, 스크립트 실행 등 다양한 기능을 제공하여 개발자들이 효과적으로 프로젝트를 관리하고 개발할 수 있게 도와준다.
- *npms.js* 사이트를 활용하면 필요한 의존성을 찾아 간편하게 추가할 수 있다.
