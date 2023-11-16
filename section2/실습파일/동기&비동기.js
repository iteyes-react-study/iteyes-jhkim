
/*
* 동기 방식 실습
* */
function taskA(){
    //console.log("A 작업 끝");
}

taskA();
//console.log("코드 끝");


function taskB(){
    setTimeout(() => {
        console.log("A TASK END");
    }, 2000);
}

//taskB();
//console.log("코드 끝");


/*
* 비동기 동작 처리 방법(콜백 함수 이용)
* */
function taskC(a,b,cb){
    setTimeout(() =>{
        const res = a +b; // res 값을 바깥에서 사용하기 위해선 callback 함수 이용
        cb(res);
    },3000);
}


function taskF(a,cb){
    setTimeout(()=>{
        const res = a * -1;
        cb(res);
    },1500)
}
// taskC(3,4,(res) =>{
//     console.log("tasK C RESULT :", res);
// });


// taskF(10,(res) => {
//     console.log("task F RESULT:" + res);
// })

//console.log("C END");

console.log(3);