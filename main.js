const container = document.querySelector('#container');
const btn = document.getElementById('grid-btn');

// let gridNumber = 50;


function creatGrid(gridNumber){

    let gridDimension = 640/gridNumber;
    for(let i = 1; i<=gridNumber*gridNumber; i++){
        
        const myDiv = document.createElement('div');
        myDiv.classList.add('inner-div');
        myDiv.setAttribute('style',`height: ${gridDimension}px; width: ${gridDimension}px;`);
        container.appendChild(myDiv);
    }
}

function deletDiv(){
    let divs = container.querySelectorAll('.inner-div');    
    divs.forEach((x) => {
        container.removeChild(x);
    });
    
}

function draw() {
    
    const divs = document.querySelectorAll('.inner-div');
    
    function changeColor(e){
        e.target.style.background = 'black';
        
    }
    
    divs.forEach((div) => {
        div.addEventListener('mouseover',changeColor);
    });
}
function getUserInput(){
    let newGridNumber = parseInt(prompt('Enter grid number(less than 100)'));
    deletDiv(); 
    creatGrid(newGridNumber);
    draw();
}

creatGrid(50);
draw();

btn.addEventListener('click',getUserInput);


