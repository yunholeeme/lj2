

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

// randomly returns a string representing one of the six Crown and Anchor faces
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let funds = 50;     // starting conditions
let round = 0;      // round count

while (funds > 1 && funds < 100) {
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    // place bets
    const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
    let totalBet = rand(1, funds);
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
        // console.log(`bets.heart : ${bets.heart}`);
    } else {
        // distribute total bet
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while(remaining > 0);
    }

    funds = funds - totalBet;
    console.log('\tbets: ' + 
        Object.keys(bets).map(face => `${face}:${bets[face]}pence`).join(',') +
         ` (total: ${totalBet} pence)`);

    // roll dice
    const hand = [];
    for (let roll = 0; roll < 3; ++roll) {
        hand.push(randFace());
    }

    // collect winnings
    let winnings = 0;
    for (let die=0; die < hand.length; ++die) {
        let face = hand[die];
        if (bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);

