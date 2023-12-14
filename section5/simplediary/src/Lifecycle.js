import React, {useEffect, useState} from 'react';

const UnmountTest = () => {
    useEffect(() => {
      console.log("Mount !!");
  
      // Cleanup function
      return () => {
        console.log("Unmount !!");
      };
    }, []); // 빈 배열이므로 컴포넌트가 마운트되었을 때만 실행
  
    return <div>UnmountTest Component</div>;
  };

const LifeCycle = () => {

    // const [count,setCount] = useState(0);
    // const [text, setText] = useState("");

    // useEffect(() => {
    //     console.log("Mount!!!");
    // } ,[]) 
    
    // 컴포넌트가 마운트 된 시점에만 작동하기 떄문에 최초 이후엔 콘솔이 찍히지 않는다.
    // 빈 배열을 전달한다는것은 최초 한번 특정 작업을 수행하고자 할때 사용한다.
    // 초기 데이터 로딩, 이벤트 리스터, 외부 자원에 대한 설정 등이 해당된다.
    // 최초 한번만 실행되므로 불필요한 랜더링이 발생하지 않고 성능을 최적화 할 수 있다.

    // 컴포넌트가 바뀌는 순간
    // 1. state가 바뀌거나
    // 2. 부모로부터 내려오는 props가 바뀌거나
    // 3. 부모컴포넌트가 리랜더링 될때
    
    // useEffect(() => {
    //     console.log("update");
    // })

    // useEffect(() => {
    //     console.log(`count is update : ${count}`);
    //     if(count > 5){
    //         alert(`count가 5를 넘었습니다. 따라서 1로 초기화합니다.`);
    //         setCount(1);
    //     }
    // },[count]);


    // useEffect(() => {
    //     console.log(`text is update : ${text}`);
    // },[text]);

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        // 단락회로 평가
        <div style={{padding : 20}}>
            <button onClick={toggle}> ON / OFF</button>
            {isVisible && <UnmountTest/>} 
        </div>
    );
};

export default LifeCycle;