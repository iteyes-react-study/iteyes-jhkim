# 5강 간단한 일기장 만들기

이제부턴 React를 활용한 실습 위주 프로젝트이다.

<br>

--- 

## 1.간단한 일기장 만들기 프로젝트


*완성 일기장 그림*

![결과](image/오늘의일기결과.png) 

***정리***
-  ***상태(State)*** 와 ***Props*** 중요 
- ***Spread***, ***비구조화 할당*** 중요
- 코드는 간결하고 직관적으로 구현할 수 있다.

---

### 2. React에서 DOM 조작하기

 ✔️  DOM(Document Object Model)
문서 객체 모델은 XML이나 HTML 문서에 접근하기 위한 트리 형태의 인터페이스이다.

<br>

이 객체 모델은 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공합니다.

리액트를 사용하는 이유 중 하나인 Virtual Dom은 기존 작은 변화에도 DOM을 새로 그려야했던 단점을 보완한 강점을 가지고 있었다.

<br>
 

✔️ MutableReactObj

HTML, DOM 요소를 접근할 수 있게 한다.

예제 코드
``` jsx
import  {useRef} from "react"; // react에서 import

const authorInput = useRef(); // useRef를 할당

<input ref={authorInput}> 
</input>// 이후 authorInput(태그)에 접근 가능하게한다.

if(text.length < 2) authorInput.current.focus() // fouus 가능
```

</br>

***정리***
- useRef 를 활용해 HTML의 태그에 접근을 가능하게하고 이를 활용해 해당 input에 focus 처리를 할 수 있다.

---

### 3 ~ 6 배열 CRUD

React에서 데이터를 랜더링하고 CRUD 하는 작업에 대해 실습하는 챕터


***신규 데이터를 추가하는 프로세스***

![배열 추가 그림](image/데이터배열추가.png)

가장 최상위로 `App` 하위 level로 `DiaraEditor`와 `DiaryList` 컴포넌트가 각각 분리되어 있다.

이렇게 이루어진 이유는 리액트는 `단방향 데이터 흐름` 을 가지고 있어 동일 레벨에선 데이터를 주고 받을 수 없기 떄문이다.

그러므로 신규 데이터를 추가하기 위해선 상위 컴포넌트인 App에서 이를 처리하고 관리해야 한다.

</br>

<U> App.js </U>

``` js
// 최상위 컴포넌트 App.js
  const [data,setData] = useState([]);

  const dataId = useRef(0);
  
  const onCreate = (author, content, emotion) => {
      const create_date = new Date().getTime();

      const newItem = {
        author,
        content,
        emotion,
        create_date,
        id : dataId.current
      }
      dataId.current ++;
      // 신규 데이터를 가장 앞에 보여주기 위해
      setData([newItem, ...data]);
  }

  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data}/>
    </div>
  );

```
최상위 컴포넌트인 `App`에서 전역적으로 데이터를 관리할 `state`인 `data`와 상태변화 함수인 `setData`를 선언한다.

일기 데이터를 저장하므로 배열로 생성한다.

ID 처리를 위해 useRef를 활용해 dataId라는 변수를 선언했고 이를 이용해 데이터의 id값을 관리하고 있다.

신규 데이터를 가장 최신의 데이터로 보여주기 위해 setData 파라미터로 가장 먼저 넘겨주었고 기존 데이터와의 관리를 위해 `Spread` 연산자를 사용했다.

</br>

<U> DiaryEditor.js </U>

``` jsx
const DiaryEditor =  ({onCreate}) =>{
...
...

const handleSubmit = () => {

    if(state.author.length < 1) {
        authorInput.current.focus();
        return ;
    } else if(state.content.length < 5){
        contentInput.current.focus();
        return;
    }

    onCreate(state.author, state.content, state.emotion);        
    alert("저장 완료");
    setState({
        author : "",
        content : "",
        emotion : 1,
    });
};
```

`DiaryEditor.js` 에는 `Props`로 onCreate 를 사용해 데이터를 다시 넘겨주면 App.js에선 전역으로 사용한 `setDate` 이벤트가 발생하고

`Data` 의 상태가 변화하고 하위 컴포넌트인 `diaryList` 리랜더링 되어 데이터가 추가되는것이다.


---

***데이터 삭제 프로세스***


<U> App.js 예제코드 </U>
``` jsx
  ...
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제 되었습니다.`);
    const afterDeleteDiaryList = data.filter((it) => it.id !== targetId);
    setData(afterDeleteDiaryList);
  }
  ...
  <DiaryList onDelete={onDelete} diaryList={data}/>
```

</br>


<U> DiaryItem 예제 코드</U>
``` jsx
        <button onClick={ () => {
            console.log(id);
            if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
                    onDelete(id);
            }
        }}> 
        삭제하기 
        </button>
```

</br>

<U> DiaryList 코드 </U>
``` jsx
    return (
        // 데이터의 고유한 id를 설정하지 않으면 에러가 발생한다.
        // idx를 key정보로 설정하면 데이터 수정,삭제 시 에러가 발생할 수도 있음 그러므로 고유 키 정보를 key로 설정하는걸 권장한다.
        <div className ="DiaryList">
            <h2>일기 리스트</h2>
            <h4> {diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key ={it.id}{...it} onDelete = {onDelete}/>
                ))}
            </div>
        </div>
```
 
`DiaryItem`의 코드를 보면 페이지 하단에 위와 같이 삭제하기 버튼을 추가했다.

일반적으로 삭제는 클릭과 동시에 이루어지는게 아닌, 사용자에게 한번 더 검증을 하는게 일반적이기에 `confirm` 을 하나 더 추가한후 App.js 에서 Props로 받은 `onDelete` state에 삭제할 게시글의 id를 넘겨줬다.

</br>

1. `App.js` 에서는 `onDelete`를 전역으로 선언후 `DiaryList` 컴포넌트에 넘겨준다.

2. `DiaryList`에서는 `DiaryItem`에 각각의 데이터에 대해 `onDelete` 를 넘겨준다

3. `DiaryItem`에서는 실제 넘겨받은 `onDelete` 함수에 사용자가 삭제하길 원하는 일기의 ID를 넘겨주는 기능을 처리한다.

4. 배열의 내장함수 `filter` 를 이용해 파라미터로 받은 data 배열을 제외한 신규 배열 정보를 다시 setData 상태로 업데이트 시킨다.


