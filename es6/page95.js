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

const d = new Date();   // current date
const ts = d.valueOf(); // UTC 
console.log(ts);

const b1 = true;
const n = b1 ? 1:0;
console.log(`b1 = true : ${n}`);

const arr2 = [1, true, "hello"];
console.log(arr2.toString());     // "1, true, hello"

const n1 = 1;    // truthy
const b2 = !n;  // false
const b3 = !!n; // true
console.log(b2, b3);

function change (x2) {
    e = 22;
    console.log(e);
}

let e = 11;
// console.log((function (x2){
//     e = 5;
//     console.log(e);
// }));
change(e);
console.log(e);

let o = {a:1};
let p = o;      // 이제 p는 o가 '가리키고 있는 것'을 가리킵니다.
o["a"] = 5;
console.log(p); // {a:5}

let m = {a:1};
let j = m;
console.log(j === m);
m = {a:2};
console.log(j === m);
console.log(j);

function change_v (v) {
    v.a = 777;
}

let v = {a:1};
change_v(v);
console.log(v);

