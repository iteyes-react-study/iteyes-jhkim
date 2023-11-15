// 1. 객체와 배열
let falsyObj = { name : "준현"};  // true
let falsyArray = [1,2,"3"]; // true

// 2. 문자열과 숫자
let str ="Kim"; // true
let age = 24; // true
// 비어 있지 않는 문자열과 0이 아닌 숫자

// 3. 논리 값 'true'
if(true){
    console.log("hihi");
}

// 1. undefined, null, false
let value;
let undefinedValue = undefined;
let nullValue = null;
let boolValue = false;
// 누가봐도 false인 값들

// 2. 0과 NaN
let zero = 0;
let notNumber = NaN;
// 0과 Nan은 Falsy

// 3. '' , 또는 "" 과 같은 빈 문자열
let emptyStr = '';
//let emptyStr = "";
// '' 빈 문자열과 "" 빈 문자열은 false


let person = {name : "김준현"}
let getName = (person) => {
    if(!person){
        return "객체가 아닙니다.";
    }
    return person.name;
};
console.log(getName.name);