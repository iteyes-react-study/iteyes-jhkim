import React, {useState} from 'react';
import OddEventResult from './OddEvenResult';

const Counter = ({initialValue}) => {
 
    // 0에서 출발
    // 1씩 증가하고 1씩 감소하는
    // count 상태

    // useState는 배열을 반환하고
    // count는 상태의 값으로 사용됨
    // setCount는 count라는 값을 변화시키는 상태함수
    
    // useState의 파라미터인 0은 0부터 출발한다는 의미

    // 상태가 변화하면 리액트는 리 랜더링이 된다.
    const [count, setCount] = useState(initialValue);

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    return (
            <div>
                <h2> {count}</h2>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
                <OddEventResult count = {count}/>
            </div>
    );
};

Counter.defaultProps = {
    initialValue : 1
};

export default Counter;