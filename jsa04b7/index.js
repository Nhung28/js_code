//local storage
// localStorage.setItem()
// localStorage.getItem()

// localStorage.setItem('age', 10)
// console.log(localStorage.getItem('age'));
// localStorage.removeItem('age')

// ES6
// const numbers = [1,2,3,4];
// numbersDouble = [2,4,6,8]
// const numbersDouble = [];
// for (let i = 0; i < numbers.length; i++) {
//     numbersDouble.push(numbers[i] * 2);
// }
// console.log(numbersDouble);

// map
// 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// oddNumbers = [1,3,5,7,9]
// const oddNumbers = [];
// for (let i = 0; i  numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers.push(numbers[i])
//     }
// }
// console.log(oddNumbers);
// const oddNumbers = numbers.filter(number => number % 2 !== 0)
// const oddNumbers = numbers.filter((number) => {
//     return number % 2 !== 0;
// });
// console.log(oddNumbers);

const students = [
    {
        name: 'Uyen',
        age: 10
    },
    {
        name: 'Nha Van',
        age: 11
    },
    {
        name: 'Hieu',
        age: 3
    },
    {
        name: 'Huy',
        age: 2
    },
];
//step 1
// babyStudents = [
//     {
//         name: 'Hieu',
//         age: 3
//     },
//     {
//         name: 'Huy',
//         age: 2
//     },
// ]

// step 2
// ['Hieu', 'Huy']
// const babyStudents = students.filter(student => student.age < 5).map((student) => student.name);
// console.log(babyStudents);

// reduce

const myApiUrl = 'https://60603e5104b05d0017ba2191.mockapi.io/api/v1/todos';
const getAllTodos = async () => {
    console.log('Loading...');
    const response = await fetch(myApiUrl);
    const data = await response.json();
    return data;
}
const createNewTodo = async (newTodoData) => {
    const response = await fetch(myApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodoData)
    });
    const data = await response.json();
    console.log(data);
}


const todoItemsEl = document.getElementById('to-do-items')
const renderTodo = async () => {
    const todosData = await getAllTodos();
    todoItemsEl.innerHTML += `
    <div class="to-do-item">${todosData[0].content}</div>
    `
}
renderTodo();

