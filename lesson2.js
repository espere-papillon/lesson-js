const test = () => "test"

// function test() {
//     return "test"
// }

test()

console.log(test)
console.dir(test)

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

//const mapedStudents = students.map(st => st.scores + 10)

function customMap(array, func) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = func(array[i])
    }

    return newArray
}

function addScores(student) {
    return {...student, scores: student.scores + 10}
}

console.log(customMap(students, addScores))

function customFilter(array, func) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i] === true))
            newArray[i].push(array[i])
    }

    return newArray
}

const getMarriedStudent = st => st.isMarried


const findBob = st => st.name === "Bob"

console.log(customMap(students, findBob))

function isIsogram(str) {
    if (str === "") {
        return true
    } else {
        str = str.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                if (str[i] === str[j]) return false;
                else return true;
            }
        }


    }
}

function fridayTheThirteenths(start, end) {
    let str = '';
    for (let year = start; year <= end; year++){
        for (let month = 0; month < 12; month++) {
            let d = new Date(year, month, 13);
              if (d.getDay() == 5) {
                  if (str !== '') str += ' ';
                str += d.toLocaleDateString('en-US');
            }
        }
    }
    return str;
}

console.log(fridayTheThirteenths(2000));