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
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

// console.log(randFace());

const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
let totalBet = rand(1, funds);
if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
    console.log(`bets.heart : ${bets.heart}`);
} else {
    // distribute total bet
}

funds = funds - totalBet;
console.log(funds);