// variable: number, string, boolean;
let x = 123;
let y ="hellocao"
let z = true

// array: save the same meaning
let a = [1,2,3,4]
// command of array 
console.log(y)
console.log(a[1]); //get element at index
console.log(a.length);//get a mount of index
a.push(3) //add value of element
console.log(a);
a.splice(3,2) //delete 2 element from index 3: splice (index,number of element is deleted)
console.log(a);
a.splice(1,2,5) //splice(index,number of element is deleted, element is placed)
console.log(a);
a[1]=a[1]+2 //update value of element at index : a[index]
console.log(a);


//object: save information of "doi tuong"
let person = {
    name: "nhun", 
    age: 10,
}
//command of object
console.log(person.name);
person.address = 123 // add key which isn't existed
console.log(person);
person.age=11 //update existed key
console.log(person);
delete person.name // delete key
console.log(person);




