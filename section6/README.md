# section6. 실전 프로젝트 - 감정 일기장 만들기

실전 프로젝트 내용이다.


## 1. 페이지 라우팅 0 - React SPA & CSR

어떤 네트워크 내에서 통신 데이터를 보낼 경로를 선택하는 일련의 과정


</br>

***용어***

✔️ Router

데이터의 경로를 정해주는 역할을 하는 네트워크 장비

</br>

✔️ 페이지 라우팅이란?

request에 대한 응답 페이지를 리턴하는 일련의 과정

</br>

✔️ MPA

`Multipage Application`, 여러 페이지를 가지고 있는 어플리케이션을 말한다.

</br>

✔️ SPA

`Single Page Application`, 단일 페이지 어플리케이션 (=React)

</br>

리액트가 사용하고 있는 웹 페이지 구성 방식이다.

하지만 리액트도 페이지 이동을 할 수 있다.

***SPA***를 이용하면 웹 페이지 이동 방식은 일단 웹 페이지 먼저 바꿔버리고 이후에 데이터를 서버로부터 가져오는 방식이다.

이러한 방식을 ***CSR***(Client Side Rendering) 방식이라 한다.

</br>

---

## 2.  페이지 라우팅 1 - React Router 기본

✔️ React Router

클라이언트 사이드 랜더링을 도와주는 라이브러리


설치 명령어
`npm install react-router-dom@6`

@6의 의미 : 명시적으로 6버전을 설치해달라는 뜻

`Router`와 `Link`를 통해서 마치 페이지가 이동된것처럼 보여주는 방식 , 깜빡임이 없고 속도가 굉장히 빠르다.

<br/>

**Router 활용 코드**

``` jsx
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

import RouteTest from './components/RouteTest';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      App.js
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/diary" element={<Diary/>} />
      </Routes>
      {/* 이 방식은 SPA가 아닌 MPA의 특징임 , react는 이러한 방식을 사용하지 않음 */}
      {/* <a href={"/new"}> New로 이동 </a>
       */}
       <RouteTest/>
    </div>
    </BrowserRouter>
  );
}
```

실제 App.js 내부 App.js 는 고정이며 하위 컴포넌트를 계속 바꿔 보여주는 방식이다.

default path로 접속시 하위 컴포넌트는 매핑된 `./pages/Home ` 경로에 화면이 컴포넌트로 매핑되어 보여지게 된다.

<br/>

아래는 MPA 방식에서 A 태그를 통해 링크를 거는 방식을 CSR 방식으로 사용하는 예제 코드이다.

<br/>

**Link 사용 예제**

```jsx
import {Link} from 'react-router-dom';

const RouteTest = () => {
    return (
    <>
        <Link to={'/'}>HOME</Link>
        <br/>
        <Link to={'/diary'}> DIARY </Link>
        <br/>
        <Link to={'/edit'}> EDIT </Link>
        <br/>
        <Link to={'/new'}> NEW</Link>
    </>
    )
}

export default RouteTest;

```

클라이언트 사이드 방식의 코드에선 위와 같은 링크를 통해 사용자에게 실제 새로운 페이지가 보여주는것처럼 구현할 수 있다.

<br/>

**정리**

- 리액트는 SPA 페이지이며 페이지 이동시에도 CSR 방식을 사용하여 보다 빠르고 쾌적환 환경을 사용자에게 제공하는 특징을 갖고 있다.
- CSR 방식은 실제 페이지가 바뀌는게 아닌 이동괸것처럼 보여주는 방식이다.


---

## 3.  페이지 라우팅 2 - React Router 응용

1. Path Variable
- useParams

``` jsx
import { useParams } from "react-router-dom";

const {id} = useParams();
```
리액트 라우터의 커스텀 훅을 이용해서 페이지에 전달한 id 값을 꺼내 쓸 수 있다.


<br/>

2. Query String
- useSearchParams

쿼리 스트링으로 전달한 value ? 뒤에 값은 path에 영향을 주지 않는다.

?name=jun... 이런 데이터가 붙어있어도 `Router` 는 매핑해 랜더링한다.

<br/>

**Query String** 예제
```jsx
import { useSearchParams } from "react-router-dom";

const Edit = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    console.log("id" ,id);

    const mode = searchParams.get("mode");
    console.log("mode",mode);
    <div>
        <h1>Edit</h1>
        <p>이곳은 일기 수정 페이지입니다.</p>
    </div>
}
```
`useSearchParams` 를 통해 url의 key,value의 데이터를 접근해 가져올 수 있다.

<br/>

3. Page Moving
- useNavigate

```jsx
    import { useNavigate } from "react-router-dom";

    <button onClick={() => {
        navigate("/home");
    }}>Home으로 돌아가기</button>

    <button onClick={() => {
        navigate(-1);
    }}>뒤로가기</button>
```

`useNavigate` 를 사용해 경로를 지정할 수 있고 -1 지정 시 뒤로가기까지 처리할 수 있다.

<br/>

**정리**
- 상세 페이지에선 `Path Variable` , 목록 페이지에선 `Query String`, 기타 페이지 이동시엔 `useNavigate` 를 사용하면 유용할듯 하다. 


---

## 프로젝트 기초 공사 

```jsx
  // 클래스 타입으로 정의되어 있찌 않은 타입이 Props로 오는것을 상수로 관리해 방지한다.
  const btnType = ["positive","negative"].includes(type) ? type : "default";

  // button css 를 관리하는 방법
  <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}>
      {text}
  </button>
```

Props로 전달받은 type정보가 css로 지정한 상수값에 존재하지 않으면 default로 처리 하는 방법






