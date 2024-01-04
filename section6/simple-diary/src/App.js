
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import React, {useRef, useReducer } from 'react';


const reducer = (state, action) => {
  let newState = [];
  switch(action.type){
    case "INIT" : {
      return action.data;
    }
    case "CREATE" : {
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE" : {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT" : {
      newState = state.map((it) => 
      it.id === action.data.id ? {...action.data} : it
      );
    break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id : 1,
    emotion : 1,
    content : "오늘의 일기 1번",
    date : 1704347961850,
  },
  {
    id : 2,
    emotion : 2,
    content : "오늘의 일기 2번",
    date : 1704347961852,
  },
  {
    id : 3,
    emotion : 3,
    content : "오늘의 일기 3번",
    date : 1704347961855,
  },
  {
    id : 4,
    emotion : 4,
    content : "오늘의 일기 4번",
    date : 1704347961859,
  }
]



function App() {

  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  //CREATE
  const onCreate = (date,content,emotion) => {
    dispatch({
      type : "CREATE",
      data : {
        id : dataId.current,
        date : new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({type:"REMOVE", targetId});
  };

  //EDIT
  const onEdit = (targetId,date,content,emotion) =>{
    dispatch({
      type : "EDIT",
      data : {
        id : targetId,
        date : new Date(date).getTime(),
        content,
        emotion,
      }
    })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider 
         value = {
          {onCreate, 
           onEdit,
           onRemove}}
      />
      
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/diary/:id" element={<Diary/>} />
      </Routes>
      {/* 이 방식은 SPA가 아닌 MPA의 특징임 , react는 이러한 방식을 사용하지 않음 */}
      {/* <a href={"/new"}> New로 이동 </a>
       */}
    </div>
    </BrowserRouter>
    </DiaryStateContext.Provider>
  );
}

export default App;
