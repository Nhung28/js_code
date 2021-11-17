 //function
// // 1
// const sayHello = ()=>{
//     console.log('hello nhun');
// }

// sayHello('nhun');
// const square = (num)=>{
//     console.log(num**2);
// }
// square(4)

// const sum=(name, age)=>{
//     console.log(`hello ${name} ${age+1} tuoi`);
// }
// sum('nhun',10)
// sum('nam',20)
let students = [
    {
        name: "A",
        courses: ["GB01", "GA01"]

    },
    {
        name: "B",
        courses: ["JSB", "JSA", "JSI"]
    },
    {
        name: "C",
        courses: ["SB", "SA", "SI"]
    }
];

//When call name --> show their course
const info = (studentName)=>{
    let studentCourse;
    for (let student of students){
        console.log('đang xét tk học viên', student);
        if (studentName===student.name){
            console.log('đúng là n rùi');
            studentCourse=student.courses
        } else{
            console.log(' k phải nó, tk tiếp theo');
        }
    }
    console.log(studentCourse);

}

info('C') //["GB01", "GA01"]
