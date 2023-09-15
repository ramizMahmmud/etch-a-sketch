const container = document.querySelector('#container');
for(let i = 1; i<=16*16; i++){

    const myDiv = document.createElement('div');
    myDiv.classList.add('inner-div');
    container.appendChild(myDiv);
}


