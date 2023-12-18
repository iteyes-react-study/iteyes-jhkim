import React, { useCallback, useEffect, useRef, useMemo, useReducer } from 'react';
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


const reducer = (state,action) => {
  switch(action.type){
    case `INIT` : {
      return action.data;
    }
    case `CREATE` : {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }

    case `REMOVE` : {
      return state.filter((it) => it.id !== action.targetId);
    }

    case `EDIT`:{
      return state.map((it) => 
      it.id === action.targetId ? 
      {...it, content : action.updateContent} : it
      )
    }

    default :
      return state;
  }
}

// 내보내기
export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

function App() {
  // DATA에는 일기 데이터 배열을 저장할것임
  const [data,dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json());
    
    const initData = res.slice(0,5).map((it) => {
        return {
          author : it.email,
          content : it.body,
          emotion : Math.floor(Math.random() * 5) +1,
          create_date : new Date().getTime(),
          id : dataId.current++
      }
    })


    dispatch({type : "INIT", data:initData});
  };

    // 최초 랜더링 되었을떄 한번 실행
    useEffect(() => {
      getData();
    },[])
    
  const onCreate = useCallback(
    (author, content, emotion) => {
      // 신규 데이터를 가장 앞에 보여주기 위해
      dispatch({
        type:"CREATE",
        data:{author,content,emotion, id:dataId.current}}
        );

      dataId.current ++; 
    },
    []  
  ) 

  const onRemove = useCallback((targetId) => {
    dispatch({type:"REMOVE", targetId});
  }
  ,[]
  )

  const onUpdate = useCallback((targetId,updateContent) => {

    dispatch({type:"EDIT", targetId, updateContent});
    },[]
  );

  const memoizedDispatches = useMemo(() => {
    return {onCreate,onRemove,onUpdate}
  },[]);


  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value ={memoizedDispatches}>
    <div className="App">
      {/* <OptimizeTest/> */}
      <DiaryEditor/>
      {/* <div> 전체일기 : {data.length} </div>
      <div> 기분 좋은일기 개수 : {goodCount}</div>
      <div> 기분 나쁜일기 개수 : {badCount}</div>
      <div> 기분 좋은일기 비율 : {goodRatio}</div> */}
      <DiaryList/>
    </div>
    </DiaryDispatchContext.Provider> 
    </DiaryStateContext.Provider>
  );
}

export default App;
