// function isKoreanFood(food){
//     if(["불고기","떡볶이","비빔밥"].includes(food)){
//         return true;
//     }
//     return false;
// }

const meal = {
    한식 : "불고기",
    중식 : "멘보샤",
    일식 : "초밥",
    양식 : "스테이크",
    인도식 : "카레"
};
const getMeal =(mealType) => {
    return meal[mealType]  || "굶기"
}

console.log(getMeal("한식")); // "불고기";
console.log(getMeal("미국식")); // "굶기";