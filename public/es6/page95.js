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
    ["🛑", "💛🎉", "💛"],
];

console.log(a2[1]);
console.log(a3[1]);

const sungshin07 = () => {
    for (let s of a3) {
        console.log(s);
    }
};

console.log(a4[1]["hardness"]);
sungshin07();
console.log(a5[a5.length - 1]);

//3.19.1 Converting to Numbers
console.log("Converting to Numbers");

const numStr = "69";
const num = Number(numStr);
console.log(typeof(num));
console.log(num);

const a = parseInt("16 girs", 10);
const b = parseInt("3a", 16);
const c = parseFloat("15.5 kph");

const arr1 = [a, b, c];
for (let arr of arr1) {
    console.log(arr);
}