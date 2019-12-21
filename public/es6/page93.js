const sam1 = {
    name: 'Sam',
    age: 4,
};

const sam2 = { name: 'Sam', age:4};

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: "catus",
    },
};

sam1.age;
sam2.name;
sam3.speak = () => "Meow!";

console.log(sam3.classification.family);
console.log(sam3.classification['family']);
console.log(sam3['classification'].family);
console.log(sam3['classification']["family"]);
console.log(sam3.speak());
