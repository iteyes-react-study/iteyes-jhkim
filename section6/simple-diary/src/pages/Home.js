import {useContext, useEffect, useState} from "react";
import MyHeader from "./../components/MyHeader"
import MyButton from "./../components/MyButton"
import { DiaryStateContext } from "../App";


// COMPONENTS
const Home = () => {

    const diaryList = useContext(DiaryStateContext);

    const [data,setData] = useState([]);

    const [curDate,setCurDate] = useState(new Date());
    
    useEffect(() => {
        // 이번 년도 이번 월의 1일의 시간
        const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(),1).getTime();

        // 다음달 0일
        const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1,0).getTime();

        setData(diaryList.filter((it) => firstDay <= it.date && it.date < lastDay))

    }, [diaryList,curDate])

    useEffect(() => {
    },[data]);

    // 자바스크립트 객체는 1월이 0 그러므로 + 1해줘야함
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`

    const decreaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDay())
        );
    };

    const increaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDay())
        );
    };

    return <div>
         <MyHeader headText = {headText}
            leftChild={<MyButton text ={"<"}  onClick={decreaseMonth} /> }
            rightChild={<MyButton text ={">"}  onClick={increaseMonth} /> }
         >
         </MyHeader>
    </div>
}

export default Home;