

let body = document.querySelector('body');
let circle = document.createElement('div');
let button = document.createElement('div');
let textarea  = document.createElement('textarea');
let changeButton = document.createElement('button');
let deg = 0;

circle.classList.add('circle');
button.classList.add('button');
textarea.classList.add('textarea');
changeButton.classList.add('changeButton');


button.innerText = 'start';
changeButton.innerText = 'get name'

const colors = ['red', 'blue', 'green', 'yellow'];
let items = [];
console.log(items);


function draw() {
    let result = "";
    for (let i = 0; i < items.length; i++) {
        let colorIndex = i;
        let deg = Math.floor(360 / items.length);
        if (i === items.length - 1 && items.length % 4 === 1) {
            colorIndex = colorIndex - colors.length * Math.floor(i / colors.length) + 1;
        } else if (colorIndex >= colors.length) {
            colorIndex = colorIndex - colors.length * Math.floor(i / colors.length);
        }
    
        result = result + ` ${colors[colorIndex]}`;
        if (i === items.length - 1) {
            result = result + ` ${deg * i}deg ${deg * (i + 1)}deg`;
        } else {
            result = result + ` ${deg * i}deg ${deg * (i + 1)}deg,`;
        }
    }
   circle.style.background = `conic-gradient(${result})`;

}


function getItems() {
    let text = textarea.value;
    items = text.split("\n")
    draw()
}



circle.appendChild(button);
body.appendChild(circle);
body.appendChild(textarea);
body.appendChild(changeButton);

function rotateCircle() {
    deg = deg + 1440 + Math.random() * 360;
    circle.style.transform = `rotate(${deg}deg)`;
}

button.onclick = rotateCircle;
changeButton.onclick = getItems;




