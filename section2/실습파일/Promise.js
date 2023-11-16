
/*
* Promise 적용 전 코드
* */
// function isPositive(number, resolve, reject){
//     setTimeout(() => {
//         if(typeof number === 'number'){
//             // 비동기 작업 성공 로직 -> resolve
//             resolve(number > 0 ? "양수" : number === 0 ?  "빵이요" : "음수")
//         } else {
//             // 비동기 작업 실패 로직 -> reject
//             reject("주어진 값은 숫자가 아닙니다.");
//         }
//     },2000)
// }

// isPositive("ㅁ", (res) => {
//     console.log("성공적으로 수행됨 : " + res);
// }, (err) => {
//     console.log("실패함 : " + err);
// });

/*
* Promise 적용 후
* 2초 뒤에 넘버가 양수인지 음수인지 0인지 판단한다.
* 함수가 Promise를 반환한다는 것은 비동기 작업을 수행한다는 의미임.
* */
// function isPositiveP(number){
//     // 비동기 함수가 성공했을때 전달받은 콜백함수 : resolve
//     // 비동기 함수가 실패했을때 전달받은 콜백함수 : reject
//     const executor = (resolve,reject) => {
//         setTimeout(() => {
//             if(typeof number === 'number'){
//                 // 비동기 작업 성공 로직 -> resolve
//                 console.log(number);
//                 resolve(number > 0 ? "양수" : number === 0 ?  "빵이요" : "음수")
//             } else {
//                 // 비동기 작업 실패 로직 -> reject
//                 reject("주어진 값은 숫자가 아닙니다.");
//             }
//         },2000)
//     }
//     const asyncTask = new Promise(executor);
//     return asyncTask;
// }
// const res = isPositiveP([]);
// res.then((res) => {
//     console.log("작업 성공 : ",res)}).catch((err) => {
//         console.log("작업 실패 : ",err)
// })

/*
* 콜백 지옥 탈출하기
* */

function taskA(a,b,cb){
    setTimeout(() => {
        const res = a + b;
        cb(res);
    },2000)
}

function taskB(a,b,cb){
    setTimeout(() => {
        const res = a + b;
        cb(res);
    },2000)
}

function taskC(a,b,cb){
    setTimeout(() => {
        const res = a + b;
        cb(res);
    },2000)
}

taskA(5,5, (a_res) => {
    console.log("A TASK RESULT ::" , a_res);
    taskB(a_res, a_res, (b_res) => {
        console.log("B TASK RESULT ::" , b_res);
        taskC(b_res,b_res,(c_res) => {
            console.log("C TASK RESULT ::", c_res);
        })
    })
})


function taskA(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const res = a + b;
            resolve(res);
        },3000);
    })
}

function taskB (a){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const res = a * 2;
            resolve(res);
        },1000)
    })
}

function taskC(a){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const res = a * -1;
            resolve(res);
        },2000)
    })
}

taskA(3,4,(a_res)=> {
    console.log("tasK A ::" + a_res);
    taskB(a_res, (b_res) => {
        console.log("task B ::"  + b_res);
        taskC(b_res, (c_res) => {
            console.log("task C::" + c_res);
        })
    })
})

taskA(5,1).then((a_res) => {
    console.log("A RESULT::" , a_res);
    taskB(a_res).then((b_res) => {
        console.log("B RESULT::" , b_res);
        taskC(b_res).then((c_res) => {
            console.log("C RESULT::", c_res);
        });
    })
})

/*
* then chaining
* */
taskA(5,1).then((a_res) => {
    console.log("A RESULT::" , a_res);
    return taskB(a_res);
}).then((b_res) => {
    console.log("B RESULT::" , b_res);
    return taskC(b_res);
}).then((c_res) => {
    console.log("C RESULT::" , c_res);
})
