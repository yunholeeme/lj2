const girls = [{name:"leehyerim", age: 32}, {name:"janghajin", age: 32}, {name:"kimminkyung", age: 31}];

const names = girls.map(x => x.name);

console.log(names);

const bets = {crown: 10, hart: 1, spade: 3, clover: 0};
console.log(bets);
console.log(typeof(Object.keys(bets)));
console.log("#####");
console.log(Object.keys(bets));
console.log(Object.keys(bets).map(x => `${x}:${bets[x]}`));
console.log(JSON.stringify(bets));