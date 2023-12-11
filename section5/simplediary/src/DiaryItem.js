import { useState } from "react";


const DiaryItem = ({
    onRemove, 
    author, 
    content, 
    created_date, 
    emotion, 
    id }) => {
    console.log("Author::" , author);

    const [isEdit, setIsEdit] = useState();
    // 반전연산, isEdit가 true일때 수정할 수 있도록 처리한다.
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent, setLocalContent] = useState("");

    const handleRemove = () => {
        const fixId = (`${id}` === 0) ? 1 : `${id}`;
        if(window.confirm(`${fixId}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id);
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
                  <textarea 
                  value={localContent}
                  onChange={(e) => {
                    setLocalContent(e.target.value)}}
                  />
                </>
            )   : (
                <> {content} </>
            )}     
        </div>

        <button onClick={handleRemove}>삭제하기 </button>
        <button onClick={toggleIsEdit}>수정하기</button>
    </div>
    );
}

export default DiaryItem;