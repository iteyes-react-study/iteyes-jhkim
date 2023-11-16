// async

function hello() {
    return "hello";
}

/*
* async를 붙이게 되면 자동적으로 비동기 Promise를 리턴하는 비동기 함수가 된다.
* */
async function helloAsync(){
    return "hello Async";
}

// console.log(hello());
// console.log(helloAsync().then(res => {
//     console.log("res::"  + res);
// }));

function delay(ms){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve();
        },ms);
    })
}


async function helloAsync() {
    return delay(3000).then(() => {
        return "hello Async";
    })
}

async function helloAwait(){
    // await 줄은 다 동기적으로 수행한다., async가 붙은 함수에만 사용할 수 있음
    await delay(3000);
    return "hello Async";
}

// helloAsync().then((res) => {
//     console.log(res);
// })


async function main(){
    const res = await helloAwait();
    console.log(res);
}

main();