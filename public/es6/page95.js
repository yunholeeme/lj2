const s = "hello";
console.log(s.toUpperCase());

s.rating = 3;
console.log(s.rating);

const a2 = [1, "two", 3, null]; // different types
const a3 = [
    "I love leehyerim",
    "I love beakyuri",
    "I love chominji",
    "I love janghajin",
];

const a4 = [
    {name:"Ruby", hardness: 9},
    {name:"Diamond", hardness: 10},
    {name:"Topaz", hardness: 8},
];

const a5 = [
    ["💛", "💛", "💛"],
    ["💛", "💛", "💛"],
    ["💛", "💛", "💛"],
];

console.log(a2[1]);
console.log(a3[1]);
const sungshin07 = (x) => {
    for (let s of x) {
        console.log(s);
    }
};

console.log(sungshin07());
console.log(a5.length);

