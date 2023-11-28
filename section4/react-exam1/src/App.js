//import './App.css';

import React from 'react';
import Counter from './Counter';
import MyHeader from './MyHeader'
import Container from './Container';

function App() {

  const style = {
    App : {
      backgroundColor : "white",
    },
    h1: {
      color : "yellow",
    },
    h2: {
      color : "red",
    },
    bold_text : {
      color : "green",
    },
  };


  const counterProps = {
    a :1,
    b: 2,
    c: 3,
    d: 4
  }

  return (
    <Container>
    <div style={style.App} className="App">

      <MyHeader/>
      <Counter {...counterProps}/>
    </div>
    </Container>
  );
}

export default App;
