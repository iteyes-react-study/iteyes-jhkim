
import './App.css';
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
        <Route path="/diary/:id" element={<Diary/>} />
      </Routes>
      {/* 이 방식은 SPA가 아닌 MPA의 특징임 , react는 이러한 방식을 사용하지 않음 */}
      {/* <a href={"/new"}> New로 이동 </a>
       */}
       <RouteTest/>
    </div>
    </BrowserRouter>
  );
}

export default App;
