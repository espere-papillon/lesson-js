const students = [
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

students.length
const names = students.map(i => (i.name !== "Nick")?`Hello, friend ${i.name}`:"Nick is not my friend")
console.log(names)