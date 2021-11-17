//DOM: decided what and how things displayed in screen
const a = document.getElementById('nhun');

const b= document.getElementsByClassName('nhun')
for (let name of b){
    name.style.color='red';
    name.innerText ='hi';
    name.innerHTML+= `
    <img src ="https://media-exp1.licdn.com/dms/image/C560BAQEJ6fbLurQfnw/company-logo_200_200/0/1585241171380?e=2159024400&v=beta&t=imAOP5VLBTkXu2aOT_9FMQ-Z8vx1UiGOfXIM4o69gpc" />
    `   
}

//event: action effect to document (page) example: 
//click, mouse move, typing, drag and drop,...

//event listener: DOM (each part) can know what is happening.
// programmer must do sth to DOM know that ( to same: subcribe)

//Steps to intereact with DOM 
//1: get it
const btnEl = document.getElementById('click')
console.log(btnEl);
//2: add eventlistener for DOM
let count=0
btnEl.innerText=count;
let space=0
btnEl.style.left=space
btnEl.addEventListener('click', () => {
    console.log("Click accepted");
    btnEl.style.color='red';
    if (count<10){
        count= count +1
    }
    btnEl.innerText=count
    space+=10
    btnEl.style.left= `${space}px`
})


