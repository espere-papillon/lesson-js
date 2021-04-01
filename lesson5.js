// Сложность алгоритмов O(n) почитать, сортировка пузырьком через рекурсию

const arr = [777, 23, 12, 43, 32, 65, 82, 21, 0, 99]

// Bubble sort
for (let j = 0; j < arr.length - 1; j++) {
    let sort = true
    for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            sort = false;
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // меняем местами через деструктуризацию
        }
    }
    if (sort)
        break
}

console.log(arr)


// array sort

const names = ["Bob", "Alex", "Ramzan", "Donald", "duck", "990", "Игорь"]
console.log(names.sort())

const numbers = [100, 90, 1000, 2, 2]
console.log(numbers.sort())

// function compFunc(a, b) {
//     if (a > b) {
//         return 1
//     } else {
//         return -1
//     }
// }
// const compFunc = (a, b) => a - b
console.log(numbers.sort((a, b) => a - b))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    },
];
console.log(students.sort((a, b) => a.age - b.age))
// console.log(students.sort((a, b) => a.name > b.name ? 1 : -1))
