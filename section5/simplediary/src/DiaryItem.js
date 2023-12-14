import React, {useEffect, useRef, useState } from "react";

const DiaryItem = ({
    onUpdate,
    onRemove, 
    author, 
    content, 
    created_date, 
    emotion, 
    id }) => {

    useEffect(() => {
        console.log(`${id}번 쨰 아이템 랜더!`);
    })

    const [isEdit, setIsEdit] = useState();    
    // 반전연산, isEdit가 true일때 수정할 수 있도록 처리한다.
    const toggleIsEdit = () => {
        setIsEdit(!isEdit);
    }

    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef("");

    const handleRemove = () => {
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id);
        }
    }

    // 수정 취소를 눌렀을 떄, 수정 취소 상태의 content를 유지하는게 아니라 이전 content로 초기화하는 작업
    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    } 

    const handleCompleteEdit = () => {
        if(localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
            setIsEdit(false);
            onUpdate(id,localContent);
        }
    }

    return (
        <div className="DiaryItem"> 
        <div className="info">
            <span> 
                작성자 : {author} | 감정점수 : {emotion} 
            </span>
            <br/>
            <span className="date">
                {new Date(created_date).toLocaleString()}
            </span>
        </div>
        <div className="content">
        {isEdit ? (
                <>
                  <textarea ref={localContentInput} 
                  value={localContent}
                  onChange={(e) => 
                   {
                    setLocalContent(e.target.value)}}
                  />
                </>
            )   : (
                <> {content} </>
            )}     
        </div>
         {isEdit ? (
            <>
             <button onClick={handleQuitEdit}> 수정 취소 </button>
             <button onClick={handleCompleteEdit}>수정 완료</button>
            </>
        ) : ( 
            <>
            <button onClick={handleRemove}>삭제하기 </button>
            <button onClick={toggleIsEdit}>수정하기</button>
            </>
        )}
    </div>
    );
}

export default React.memo(DiaryItem);