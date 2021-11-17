const inputEl= document.getElementById("input")
const dateEl = document.getElementById("date")
let color = localStorage.getItem('color')
dateEl.style.color=color
inputEl.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    color=e.target.value
    localStorage.setItem('color',color)
    dateEl.style.color=color

})


//Local storage: feature( create, read, update, delete)
// localStorage.setItem('studentName','nhun'): create
// localStorage.setItem('studentName','cuong'): update
// localStorage.removeItem('studentName'): delete
// console.log(localStorage.getItem('studentName')): read