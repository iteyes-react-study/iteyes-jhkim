console.log(flase && true) //  false 뒤 true를 확인할 필요 없음
console.log(true || false) // false 뒤 false를 확인할 필요 없음
console.log(!true)  // false

const getName = (person) => {
    const name = person && person.name;
    return name || "객체가 아닙니다.";
}

let person = undefined;  // or {name : "김준현"}; // 두 케이스 모두 처리 가능
const name = getName(person);
console.log(person); // "객체가 아닙니다" or "김준현"