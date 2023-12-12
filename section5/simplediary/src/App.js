import { useRef, useState } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


// dummy 데이터
// const dummyList = [
//   {
//     id : 1,
//     author : "kjh",
//     content : "칼퇴가능",
//     emotion : 5,
//     created_date : new Date().getTime() // 생성자 시간 객체, 현재 시간으로 초기화됨.
//   },
//   {
//     id : 2,
//     author : "khs",
//     content : "칼퇴못함",
//     emotion : 5,
//     created_date : new Date().getTime() // 생성자 시간 객체, 현재 시간으로 초기화됨.
//   },
//   {
//     id : 3,
//     author : "kab",
//     content : "칼퇴싫어",
//     emotion : 5,
//     created_date : new Date().getTime() // 생성자 시간 객체, 현재 시간으로 초기화됨.
//   },
//   {
//     id : 4,
//     author : "kbc",
//     content : "칼퇴너가해",
//     emotion : 5,
//     created_date : new Date().getTime() // 생성자 시간 객체, 현재 시간으로 초기화됨.
//   },
//   {
//     id : 5,
//     author : "kjja",
//     content : "칼퇴가능",
//     emotion : 5,
//     created_date : new Date().getTime() // 생성자 시간 객체, 현재 시간으로 초기화됨.
//   }
// ]


function App() {

  // DATA에는 일기 데이터 배열을 저장할것임
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

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제 되었습니다.`);
    const afterDeleteDiaryList = data.filter((it) => it.id !== targetId);
    setData(afterDeleteDiaryList);
  }

  const onUpdate = (targetId,updateContent) => {
    setData(
      // 삼항연산자 사용, 수정 대상이라면 새로운 콘텐츠로 업데이트하고 그렇지 않다면 기존 배열을 가져온 배열을 세팅 후 최종 배열 세팅한다.
      data.map((it) => 
        it.id === targetId ? {...it, content:updateContent}: it 
      )
    );
  };

  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onUpdate={onUpdate} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
