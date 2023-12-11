import DiaryItem from './DiaryItem.js';


// if undefined가 내려온다면
// 에러가 발생, default props를 설정해 에러를 방지한다.
const DiaryList = ({onRemove,diaryList}) => {
    console.log(diaryList);


    return (
        // 데이터의 고유한 id를 설정하지 않으면 에러가 발생한다.
        // idx를 key정보로 설정하면 데이터 수정,삭제 시 에러가 발생할 수도 있음 그러므로 고유 키 정보를 key로 설정하는걸 권장한다.
        <div className ="DiaryList">
            <h2>일기 리스트</h2>
            <h4> {diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key ={it.id}{...it} onRemove = {onRemove}/>
                ))}
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    diaryList : [],
};

export default DiaryList;