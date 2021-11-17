// conditional: if ( boolean, )
// let age = 35
// if (age< 10) {
//     console.log("Chao em");
// }
// else if(age===10){
//     console.log("Chao ban");
// }
// else if(age< 30) {
//     console.log("Chao anh");
// }
// else{
//     console.log("Chao chu");
// }

// //loop
// let a = [1,2,5,93,4]
// for (let i=0; i< a.length; i++){
//     console.log(a[i]);
// }

// for (let num of a){
//     console.log(num);
// }
// for...in: cho object
// for..of: cho array

//example
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
// //first student's information
// console.log(students[0]);

// //first student's name
// console.log(students[0].name);

// //last class of last student
// console.log(students[1].courses[2]);

// //all classes of first student

// for (let x of students[0].courses){
//     console.log(x);
// }

//find students's name who learn more than 2 courses
for (let i = 0; i < students.length; i++) {
    let x = students[i].courses
    if (x.length > 2) {
        console.log(students[i].name);
    }
}
for (let student of students){
    let studentCourseNumber  = student.courses.length
    if (studentCourseNumber > 2) {
        console.log(student.name);
    }
}




