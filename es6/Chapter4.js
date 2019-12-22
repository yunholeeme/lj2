let funds = 50;     // start condition

// while (funds > 1 && funds < 100) {
//     // bet funds

//     // roll dices.

//     // get money
//     console.log(funds);
// }

// console.log("start");
// while (     funds > 1 &&            funds < 100) {
//     console.log(funds);




//     funds = funds + 2;
// }



// console.log(funds);

// return >= m && <= n random int
function rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
}

// 크라운 앤 앵커 게임의 여섯 가지 도형 중 하나를 무작위로 반환합니다.
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][1];
}

console.log(randFace());