const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};
//Проверка:
console.log(user === copyUser)
console.log(user.name === copyUser.name)
console.log(user.friends === copyUser.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};
deepCopyUser.age++
//Проверка:
console.log(user === deepCopyUser)
console.log(user.name === deepCopyUser.name)
console.log(user.friends === deepCopyUser.friends)

//3. Поверхностная копия массива students
let copyStudents = [...students];
//Проверка:
console.log(students === copyStudents)
console.log(students[0] === copyStudents[0])

//4. Полная (глубокая) копия массива students
let deepCopyStudents = students.map(el => {
    return {...el}
});
//Проверка:
console.log(students === deepCopyStudents)
console.log(students[0] === deepCopyStudents[0])

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortStudentsName = students.sort((a, b) => a.name > b.name ? 1 : -1)
console.log(...sortStudentsName)

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortStudentsScores = students.sort((a, b) => b.scores - a.scores)
console.log(sortStudentsScores)

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(value => value.scores >= 100);
console.log(bestStudents)

//6a."Вырежьте" трёх лучших студентов из массива deepCopyStudents (splice)
let topStudents = deepCopyStudents.sort((a, b) => b.scores - a.scores).splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-опреатор)
let newDeepCopyStudents = [...deepCopyStudents, ...topStudents];
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(value => value.isMarried === true);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = newDeepCopyStudents.map(el => el.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - запятой (join)
// - пробелом (join)
let nameWithSpace = studentsNames.join(" ");
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(", ");
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudents.map(el => ({...el, isStudent: true}));
console.log(...trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = deepCopyStudents.map(el => el.name === "Nick" ? {...el, isMarried: true} : el);
console.log(...studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = newDeepCopyStudents.find((el) => el.name === "Ann");
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = newDeepCopyStudents.reduce((max, el) => max.scores > el.scores ? max : el);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = newDeepCopyStudents.reduce((acc, el) => acc + el.scores, 0);
console.log(scoresSum)

// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство friends,
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
function addFriends(studentArray) {
    let friendName = studentArray.map(st=>st.name)
    return studentArray.map(st => ({
        ...st, friends: studentArray.filter(el => el.name !== st.name).map(el => el.name)
    }))
}

console.log(addFriends(students))



