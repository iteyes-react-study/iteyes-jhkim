import React, {useEffect, useRef, useState } from "react";
import './App.css';

const DiaryEditor =  ({onCreate}) =>{

    const authorInput = useRef();
    const contentInput = useRef();

    const [state,setState] = useState({
        author: "",
        content: "",
        emotion : 1,
        }
    )

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    }


    
    // 트렌디한 웹 사이트는 사용자가 정상적인 데이터를 입력하지 않아도
    // alert를 지양한다.
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
    
    // 클래스 이름과 컴포넌트 이름을 일치시키는것은
    // 직관적으로 스타일 코드 작성을 위함(개인스타일) 
    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
            ref={authorInput}
            name='author' 
            value = {state.author} 
            onChange={handleChangeState}
                // spread 연산자의 순서 중요
                // 객체가 만들어 질때 ...state 호출을 값을 수정하는 부분보다 뒤에서 사용하면
                // 값이 덮어씌워진다.
                // spread 연산자 사용 시 업데이트하려는 부분을 가장 마지막에 호출해서 사용한다.
            />
        </div>
        <div>
        <textarea  ref={contentInput} name='content' value = {state.content} onChange={handleChangeState}>
        </textarea>
        </div>

        <div>
            <select name='emotion' 
            value = {state.emotion} 
            // select 태그에 변화가 일어나면
            // onchange 이벤트가 발생 -> handleChangeState
            // handleChangeState 발생 시 e.target.name은 emotion이 업데이트 되고 상태(state)가 업데이트 되므로
            // useState가 업데이트 되는 것이다.
            onChange={handleChangeState}> 
                <option value = {1}>1</option>
                <option value = {2}>2</option>
                <option value = {3}>3</option>
                <option value = {4}>4</option>
                <option value = {5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}> 일기 저장하기

            </button>
        </div>
    </div>;
}

export default React.memo(DiaryEditor);