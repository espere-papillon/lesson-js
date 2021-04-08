const todoListID_1 = '342-hdg'
const todoListID_2 = '543-jrr'
const todoListID_3 = '765-hrd'

const todoLists = [
    {
        id: todoListID_1,
        title: 'what to learn?',
        filter: 'all'
    },
    {
        id: todoListID_2,
        title: 'what to buy?',
        filter: 'active'
    },
    {
        id: todoListID_3,
        title: 'what to do?',
        filter: 'completed'
    }
]

const tasks = {
    [todoListID_1]: [
        {id: '54-hnrh', title: 'html', isDone: false},
        {id: '76-mnfr', title: 'css', isDone: true}
    ],
    [todoListID_2]: [
        {id: '54-mjrf', title: 'bread', isDone: false},
        {id: '76-aerg', title: 'milk', isDone: true}
    ],
    [todoListID_3]: [
        {id: '54-sfgs', title: 'walk', isDone: false},
        {id: '76-thjm', title: 'cook', isDone: true}
    ]
}

// tasks[todoListID_1]
// console.log(tasks[todoListID_1])

console.log(tasks[todoLists[0].id][0])

const friends = {
    0: 'Alex',
    1: 'Bob',
    2: 'Nick'
}

console.log(friends[0])

// reduce

const numbers = [345, 53, 67854, 234, 56, 45]
const sum = numbers.reduce((accum, elem) => accum + elem, 0)

const sum2 = myReduce(numbers, (acc, el) => acc + el, 0)

function myReduce(arr, fn, startValue) {
    let acc = startValue
    for (let i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i])
    }
    return acc
}

const max = numbers.reduce((acc, el) => acc > el ? acc : el)


let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
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
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
console.log(students.reduce((acc, el) => acc + el.scores, 0))
console.log(students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 100})
    return acc
}, []))

console.log(students.reduce((acc, el) => {
    if(el.scores > 100) {
        acc.push(el)
    }
    return acc
}, []))