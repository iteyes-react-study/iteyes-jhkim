
// fetch 내장 함수 -> 자바스크립트에서 API를 호출할 수 있도록 도와주는 내장함수
// return Promise 객체, then을 통해서 다룰 수 있음
// let response = fetch('https://jsonplaceholder.typicode.com/posts');
//
// response.then((res) => {
//     let jsonResponse = res.json();
//     console.log(jsonResponse);
// })




/*
* async 데이터 받아오기
* */
async function getData(){
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonReponse = await rawResponse.json();
    console.log(jsonReponse);
}
getData();